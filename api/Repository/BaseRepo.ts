import {Repository, QueryRunner, EntityManager, ObjectLiteral, EntityTarget} from 'typeorm';
import {isExists} from "../utils";
export abstract class BaseRepo<T extends ObjectLiteral> extends Repository<T> {
	RELATIONS!: string[];

	async getMany(limit = 25, page = 0): Promise<T[]> {
		try {
			// @ts-ignore
			return await this.find({take: limit, skip: page * limit, order: {id: 'DESC'},
				relations: this.RELATIONS,
			});
		} catch (error) {
			throw Error(JSON.stringify(error))
		}
	}
	async getOne(id: number, cache = true): Promise<T | null> {
		try {
			// @ts-ignore
			const entity = await this.findOne({where: {id},
				relations: this.RELATIONS,
			});

			if (!isExists(entity)) {
				return null;
			}

			return entity;

		} catch (error) {
			throw Error(JSON.stringify(error))
		}
	}
}
