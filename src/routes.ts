import { Router } from "express"
import { CreateTagController } from "./controllers/CreateTag-controller"
import { CreateUserController } from "./controllers/CreateUser-controller"

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

router.post("/users", createUserController.handle)
router.post("/tags", createTagController.handle)

export { router }
