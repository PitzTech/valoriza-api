import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../../db/repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { nanoid } from "nanoid"

import config from "../config"

interface IAuthRequest {
	email: string
	password: string
}

class AuthUserService {
	async execute({ email, password }: IAuthRequest) {
		const usersRepositories = getCustomRepository(UserRepositories)

		const user = await usersRepositories.findOne({ email })
		if (!user) throw new Error("Email or Password Incorrect")

		const passwordMatch = await compare(password, user.password)
		if (!passwordMatch) throw new Error("Email or Password Incorrect")

		// END Validation

		const token = sign(
			{
				jti: nanoid(),
				email: user.email,
			},
			config.JWT_SECRET,
			{
				subject: user.id,
				expiresIn: "1d",
			}
		)

		return token
	}
}

export { AuthUserService }
