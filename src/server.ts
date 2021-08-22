import "reflect-metadata"
import express from "express"

import "../db"

const app = express()

app.listen(3000, () => {
	console.log("🚀 Server started on port 3000!")
})
