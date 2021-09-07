import { Router } from "express"
import { AuthUserController } from "./controllers/AuthUser-controller"
import { CreateComplimentController } from "./controllers/CreateCompliment-controller"
import { CreateTagController } from "./controllers/CreateTag-controller"
import { CreateUserController } from "./controllers/CreateUser-controller"

import { guardAdmin } from "./middlewares"
import { ensureAuth } from "./middlewares/ensureAuth"

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const createComplimentController = new CreateComplimentController()
const authUserController = new AuthUserController()

router.post("/users", createUserController.handle)
router.post("/tags", ensureAuth, guardAdmin, createTagController.handle)
router.post("/compliments", ensureAuth, createComplimentController.handle)
router.post("/login", authUserController.handle)

export { router }
