import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../../db/repositories/UsersRepositories"
import { hash } from "bcryptjs"

interface IUserRequest {
	name: string
	email: string
	admin?: boolean
	password: string
}

class CreateUserService {
	async execute({ name, email, admin = false, password }: IUserRequest) {
		const usersRepository = getCustomRepository(UserRepositories)

		if (!name) throw new Error("Name is missing")
		if (!email) throw new Error("E-mail is missing")
		if (!password) throw new Error("Password is missing")

		// Validation

		const userAlreadyExists = await usersRepository.findOne({ email })
		if (userAlreadyExists) throw new Error("User already exists")

		// END Validation

		const passwordHash = await hash(password, 8)

		const user = usersRepository.create({
			name,
			email,
			admin,
			password: passwordHash,
		})

		await usersRepository.save(user)

		return user
	}
}

export { CreateUserService }
