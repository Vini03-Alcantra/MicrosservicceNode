import { Router } from "express";

import {CreateClientController} from "../../../../modules/client/useCase/CreateClient/CreateClientController"
import {DeleteClientController} from "../../../../modules/client/useCase/DeleteClient/DeleteClientController"
import {ReadClienbtController} from "../../../../modules/client/useCase/ReadClient/ReadClientController";
import {UpdateClientController} from "../../../../modules/client/useCase//UpdateClient/UpdateClientController";
import {ReadIDClienbtController} from "../../../../modules/client/useCase/ReadIDClient/ReadIDClientController";

const createClientController = new CreateClientController()
const deleteClientController = new DeleteClientController()
const readClienbtController = new ReadClienbtController()
const readIDClienbtController = new ReadIDClienbtController()
const updateClientController = new UpdateClientController()

const clientRoute = Router()

clientRoute.post("/", createClientController.handle)
clientRoute.delete("/", deleteClientController.handle)
clientRoute.get("/", readClienbtController.handle)
clientRoute.get("/:id", readIDClienbtController.handle)
clientRoute.put("/", updateClientController.handle)

export {clientRoute}