import { Router } from "express"
import { AuthUserController } from "./controllers/AuthUser-controller"
import { CreateComplimentController } from "./controllers/CreateCompliment-controller"
import { CreateTagController } from "./controllers/CreateTag-controller"
import { CreateUserController } from "./controllers/CreateUser-controller"

import { ListUserReceivedComplimentsController } from "./controllers/ListUserReceivedCompliments-controller"
import { ListUserSendComplimentsController } from "./controllers/ListUserSendCompliments-controller copy"
import { ListTagsController } from "./controllers/ListTags-controller"

import { guardAdmin } from "./middlewares"
import { ensureAuth } from "./middlewares/ensureAuth"

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const createComplimentController = new CreateComplimentController()
const authUserController = new AuthUserController()

const listUserReceivedComplimentsController =
	new ListUserReceivedComplimentsController()
const listUserSendComplimentsController =
	new ListUserSendComplimentsController()
const listTagsService = new ListTagsController()

router.post("/compliments", ensureAuth, createComplimentController.handle)
router.post("/login", authUserController.handle)

router.post("/users", createUserController.handle)
router.get(
	"/users/compliments/send",
	ensureAuth,
	listUserSendComplimentsController.handle,
)
router.get(
	"/users/compliments/received",
	ensureAuth,
	listUserReceivedComplimentsController.handle,
)

router.post("/tags", ensureAuth, guardAdmin, createTagController.handle)
router.get("/tags", ensureAuth, listTagsService.handle)

export { router }
