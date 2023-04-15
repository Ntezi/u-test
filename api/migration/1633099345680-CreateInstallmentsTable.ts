import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateInstallmentsTable1633099345680 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'installment',
				columns: [
					{
						name: 'id',
						type: 'integer',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',
					},
					// ... other columns for the installments table
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('installment');
	}
}
