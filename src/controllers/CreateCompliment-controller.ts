import { Response, Request, response } from "express"
import { CreateComplimentService } from "../services/CreateCompliment-service"

class CreateComplimentController {
	async handle(req: Request, res: Response) {
		const { tag_id, user_receiver, message } = req.body
		const { user_id: user_sender } = req
		const createComplimentService = new CreateComplimentService()

		const compliment = await createComplimentService.execute({
			tag_id,
			user_sender,
			user_receiver,
			message,
		})

		return res.json(compliment)
	}
}

export { CreateComplimentController }
