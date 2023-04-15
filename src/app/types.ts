export interface Account {
	account_id: number;
	name: string;
	net_salary: number;
	saving_balances: AccountSavingBalance[];
}

export interface Commitment {
	commitment_id: number;
	amount: number;
	saving_type: SavingType;
	saving_balances: AccountSavingBalance[];
}

export interface SavingType {
	saving_type_id: number;
	name: string;
	commitments: Commitment[];
}

export interface AccountSavingBalance {
	account: Account;
	commitment: Commitment;
	balance: number;
	account_id: number;
	commitment_id: number;
}
