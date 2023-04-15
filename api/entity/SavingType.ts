import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Commitment } from "./Commitment";

@Entity()
export class SavingType {
	@PrimaryGeneratedColumn()
	saving_type_id!: number;

	@Column()
	name!: string;

	@OneToMany(() => Commitment, (commitment) => commitment.saving_type)
	commitments!: Commitment[];
}
