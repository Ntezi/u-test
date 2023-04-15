import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	OneToMany,
} from "typeorm";
import { SavingType } from "./SavingType";
import { AccountSavingBalance } from "./AccountSavingBalance";

@Entity()
export class Commitment {
	@PrimaryGeneratedColumn()
	commitment_id!: number;

	@Column()
	amount!: number;

	@ManyToOne(() => SavingType, (savingType) => savingType.commitments, {
		onDelete: "CASCADE",
	})
	saving_type!: SavingType;

	@OneToMany(
		() => AccountSavingBalance,
		(accountSavingBalance) => accountSavingBalance.commitment
	)
	saving_balances!: AccountSavingBalance[];
}
