import {BaseRepo} from "./BaseRepo";
import DataSource from "../db/DataSource";
import {AccountSavingBalance} from "../entity/AccountSavingBalance";
import {Account} from "../entity/Account";
class AccountRepo extends BaseRepo<Account>{

	constructor() {
		super(Account, DataSource.manager);
		console.log("Created new instance of AccountRepo")
		this.RELATIONS = ["saving_balances"]

	}
	async getAccounts(limit = 25, page = 0) {
		return this.getMany(limit, page);
	}

	async getAccount(id: number) {
		return this.getOne(id, true);
	}

}

export default new AccountRepo();
