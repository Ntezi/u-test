import {BaseRepo} from "./BaseRepo";
import DataSource from "../db/DataSource";
import {AccountSavingBalance} from "../entity/AccountSavingBalance";
class AccountSavingBalanceRepo extends BaseRepo<AccountSavingBalance>{

	constructor() {
		super(AccountSavingBalance, DataSource.manager);
		console.log("Created new instance of AccountSavingBalanceRepo")
		this.RELATIONS = ["saving_type"]

	}
	async getAccountSavingBalances(limit = 25, page = 0) {
		return this.getMany(limit, page);
	}

	async getAccountSavingBalance(id: number) {
		return this.getOne(id, true);
	}

}

export default new AccountSavingBalanceRepo();
