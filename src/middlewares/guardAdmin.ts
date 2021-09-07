import { Request, Response, NextFunction } from "express"
import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../../db/repositories/UsersRepositories"
import { User } from "../../db/entities/User"

export async function guardAdmin(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { user_id } = req

	const usersRepositories = getCustomRepository(UserRepositories)

	const { admin } = (await usersRepositories.findOne(user_id)) as User

	if (!admin) {
		return res.status(401).json({ error: "Unauthorized" })
	}

	return next()
}
