import {
	Entity,
	PrimaryColumn,
	Column,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { Account } from "./Account";
import { Commitment } from "./Commitment";

@Entity()
export class AccountSavingBalance {
	@ManyToOne(() => Account, (account) => account.saving_balances, {
		onDelete: "CASCADE",
	})
	@JoinColumn({ name: "account_id" })
	account!: Account;

	@ManyToOne(
		() => Commitment,
		(commitment) => commitment.saving_balances,
		{ onDelete: "CASCADE" }
	)
	@JoinColumn({ name: "commitment_id" })
	commitment!: Commitment;

	@Column()
	balance!: number;

	@PrimaryColumn()
	account_id!: number;

	@PrimaryColumn()
	commitment_id!: number;
}
