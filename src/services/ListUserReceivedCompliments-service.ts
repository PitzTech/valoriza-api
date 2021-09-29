import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../../db/repositories/UsersRepositories"
import { ComplimentsRepositories } from "../../db/repositories/ComplimentsRepositories"

class ListUserReceivedComplimentsService {
	async execute(user_id: string) {
		const complimentsRepositories = getCustomRepository(
			ComplimentsRepositories,
		)

		const compliments = await complimentsRepositories.find({
			where: {
				user_receiver: user_id,
			},
			relations: ["userSender", "userReceiver", "tag"],
		})

		return compliments
	}
}

export { ListUserReceivedComplimentsService }
