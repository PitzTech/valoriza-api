import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../../db/repositories/ComplimentsRepositories"
import { UserRepositories } from "../../db/repositories/UsersRepositories"

interface IComplimentRequest {
	tag_id: string
	user_sender: string
	user_receiver: string
	message: string
}

class CreateComplimentService {
	async execute({
		tag_id,
		user_sender,
		user_receiver,
		message,
	}: IComplimentRequest) {
		if (user_sender === user_receiver) {
			throw new Error("User Receiver and User Sender cannot be the same")
		}

		const complimentsRepositories = getCustomRepository(
			ComplimentsRepositories
		)
		const usersRepositories = getCustomRepository(UserRepositories)

		const userReceiverExists = await usersRepositories.findOne(user_receiver)

		if (!userReceiverExists) {
			throw new Error("User Receiver does not exists")
		}

		const compliment = complimentsRepositories.create({
			tag_id,
			user_receiver,
			user_sender,
			message,
		})

		await complimentsRepositories.save(compliment)

		return compliment
	}
}

export { CreateComplimentService }
