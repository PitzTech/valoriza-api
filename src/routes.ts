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
import { ListUsersController } from "./controllers/ListUsers-controller"

const router = Router()

const createComplimentController = new CreateComplimentController()
const authUserController = new AuthUserController()

const createUserController = new CreateUserController()
const listUserReceivedComplimentsController =
	new ListUserReceivedComplimentsController()
const listUserSendComplimentsController =
	new ListUserSendComplimentsController()
const listUsersController = new ListUsersController()

const listTagsService = new ListTagsController()
const createTagController = new CreateTagController()

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
router.get("/users/", ensureAuth, listUsersController.handle)

router.post("/tags", ensureAuth, guardAdmin, createTagController.handle)
router.get("/tags", ensureAuth, listTagsService.handle)

export { router }
