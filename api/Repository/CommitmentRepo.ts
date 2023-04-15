import {BaseRepo} from "./BaseRepo";
import {Commitment} from "../entity/Commitment";
import DataSource from "../db/DataSource";
class CommitmentRepo extends BaseRepo<Commitment>{

	constructor() {
		super(Commitment, DataSource.manager);
		console.log("Created new instance of CommitmentRepo")
		this.RELATIONS = ["saving_type"]

	}
	async getCommitments(limit = 25, page = 0) {
		return this.getMany(limit, page);
	}

	async getCommitment(id: number) {
		return this.getOne(id, true);
	}

}

export default new CommitmentRepo();
