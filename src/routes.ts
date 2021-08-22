import { Router } from "express"
import { AuthUserController } from "./controllers/AuthUser-controller"
import { CreateTagController } from "./controllers/CreateTag-controller"
import { CreateUserController } from "./controllers/CreateUser-controller"

import { guardAdmin } from "./middlewares"

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authUserController = new AuthUserController()

router.post("/users", createUserController.handle)
router.post("/tags", guardAdmin, createTagController.handle)
router.post("/login", authUserController.handle)

export { router }
