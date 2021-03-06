import { Request, Response } from "express"
import { ListUsersService } from "../services/ListUsers-service"

class ListUsersController {
	async handle(req: Request, res: Response) {
		const listUserService = new ListUsersService()

		const users = await listUserService.execute()

		return res.json(users)
	}
}

export { ListUsersController }
