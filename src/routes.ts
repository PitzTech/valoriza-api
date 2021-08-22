import { Router } from "express"
import { CreateTagController } from "./controllers/CreateTag-controller"
import { CreateUserController } from "./controllers/CreateUser-controller"

import { guardAdmin } from "./middlewares"

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

router.post("/users", createUserController.handle)
router.post("/tags", guardAdmin, createTagController.handle)

export { router }
