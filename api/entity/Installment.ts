import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('installment')
export class Installment {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	installmentNumber!: number;

	@Column()
	installmentDate!: number;

	@Column()
	interest!: number;

	@Column()
	remaining!: number;

	@Column({ nullable: true })
	chargesTaxesCommission?: number;

	@Column({ nullable: true })
	interestOnUnpaidAmountAndPenalties?: number;

	@Column({ nullable: true })
	outstanding?: number;

	@Column({ nullable: true })
	status?: string;
}
