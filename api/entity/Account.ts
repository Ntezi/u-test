import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { AccountSavingBalance } from "./AccountSavingBalance";

@Entity()
export class Account {
	@PrimaryGeneratedColumn()
	account_id!: number;

	@Column()
	name!: string;

	@Column()
	net_salary!: number;

	@OneToMany(
		() => AccountSavingBalance,
		(accountSavingBalance) => accountSavingBalance.account
	)
	saving_balances!: AccountSavingBalance[];
}
