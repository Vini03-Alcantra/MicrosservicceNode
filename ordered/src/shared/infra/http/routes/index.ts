import { Router } from "express";

import {CreateOrderedController} from "../../../../modules/ordered/useCase/CreateOrdered/CreateOrderedController";
import {ReadIDOrderedController} from "../../../../modules/ordered/useCase/ReadIDOrdered/ReadIDOrderedController";
import {ReadOrderedController} from "../../../../modules/ordered/useCase/ReadOrdered/ReadOrderedController";

const createOrderedController = new CreateOrderedController()
const readIDOrderedController = new ReadIDOrderedController()
const readOrderedController = new ReadOrderedController()

const orderedRoute = Router()

orderedRoute.post("/", createOrderedController.handle)
orderedRoute.get("/:id", readIDOrderedController.handle)
orderedRoute.get("/", readOrderedController.handle)

export {orderedRoute}