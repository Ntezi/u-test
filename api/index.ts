import "reflect-metadata";
import express from "express";
import DataSource from "./db/DataSource"
import {Account} from "./entity/Account";
import {AccountSavingBalance} from "./entity/AccountSavingBalance";
import CommitmentRepo from "./Repository/CommitmentRepo";
import AccountRepo from "./Repository/AccountRepo";
import AccountSavingBalanceRepo from "./Repository/AccountSavingBalanceRepo";

const app = express();
app.use(express.json());

DataSource.initialize()
	.then(() => {
		console.log("Data Source has been initialized!");
		app.post("/accounts", async (req, res) => {
			const {account_id, net_salary} = req.body;
			const account = await AccountRepo.getAccount(account_id) as Account;
			account.net_salary = net_salary;

			const commitments = await CommitmentRepo.getCommitments();

			for (const commitment of commitments) {
				const {amount, saving_type} = commitment;
				const saving_balance = new AccountSavingBalance();
				saving_balance.account = account;
				saving_balance.commitment = commitment;
				saving_balance.balance = amount;
				account.saving_balances = [...(account.saving_balances || []), saving_balance];
			}

			await AccountRepo.save(account);

			res.json(account);
		})

		app.post('/accounts/:accountId/calculate-savings', async (req, res) => {
			const { accountId, netSalary } = req.body;

			// @ts-ignore
			const account = await AccountRepo.findOne({where: { account_id: accountId}}) as Account;

			// Calculate the total amount of savings based on the commitments
			let totalSavings = 0;
			const commitments = await CommitmentRepo.find();
			for (const commitment of commitments) {
				const amountToSave = commitment.amount / 100 * netSalary;
				totalSavings += amountToSave;

				// Update the account saving balance
				// @ts-ignore
				const accountSavingBalance = await AccountSavingBalanceRepo.findOne({ where: {
						account_id: accountId,
						commitment_id: commitment.commitment_id,
					},
				}) as AccountSavingBalance;

				if (!accountSavingBalance) {
					const savingBalance = new AccountSavingBalance()
					savingBalance.commitment_id = commitment.commitment_id
					savingBalance .account_id = +accountId
					savingBalance.balance = amountToSave

				} else {
					accountSavingBalance.balance += amountToSave;
					await AccountSavingBalanceRepo.save(accountSavingBalance);
				}
			}

			// Deduct the savings from the net salary
			const remainingSalary = netSalary - totalSavings;

			// Update the account net salary
			account.net_salary = remainingSalary;
			await AccountRepo.save(account);

			res.json({
				remainingSalary,
				totalSavings,
			});
		});
	})
	.catch((error) => {
		console.log("Error during Catalog Data Source initialization");
	})
