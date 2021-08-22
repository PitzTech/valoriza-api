import "reflect-metadata"
import express, { Request, Response, NextFunction } from "express"
import "express-async-errors"

import { errorHandler } from "./middlewares"

import { router } from "./routes"

import "../db"

const app = express()

app.use(express.json())
app.use(router)
app.use(errorHandler)

app.listen(3000, () => {
	console.log("🚀 Server started on port 3000!")
})
