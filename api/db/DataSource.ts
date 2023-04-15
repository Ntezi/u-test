import {DataSource, DataSourceOptions} from 'typeorm'
import {Account} from "../entity/Account";
export const dataSourceOptions: DataSourceOptions = {
	type: "postgres",
	host: 'localhost',
	port: 5432,
	username: "postgres",
	password: "postgres",
	database: "postgres",
	schema: "public",
	entities: [Account],
	synchronize: false,
	maxQueryExecutionTime: 1000,
	migrations: ['./api/db/migrations/**/*.js', './api/db/migrations/**/*.ts'],
	subscribers: ['./api/db/subscribers/**/*.ts'],
	installExtensions: true,
};

export default new DataSource(dataSourceOptions);
