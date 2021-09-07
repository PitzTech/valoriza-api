import { Request, Response, NextFunction, response } from "express"
import { verify } from "jsonwebtoken"
import config from "../config"

interface IPayload {
	sub: string
}

export function ensureAuth(req: Request, res: Response, next: NextFunction) {
	const authToken = req.headers.authorization
	if (!authToken) {
		return res.status(401).end()
	}

	const [, token] = authToken.split(" ")

	try {
		const { sub: userId } = verify(token, config.JWT_SECRET) as IPayload

		req.user_id = userId

		return next()
	} catch (err) {
		return response.status(401).end()
	}
}
