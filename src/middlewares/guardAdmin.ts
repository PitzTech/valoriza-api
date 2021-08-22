import { Request, Response, NextFunction } from "express"

export function guardAdmin(req: Request, res: Response, next: NextFunction) {
	// TODO: VERIFY USER
	const admin = true

	if (!admin) {
		return res.status(401).json({ error: "Unauthorized" })
	}

	return next()
}
