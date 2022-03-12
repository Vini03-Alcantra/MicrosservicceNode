import { Router } from "express";

import {CreateProductController} from "../../../../modules/product/useCase/CreateProduct/CreateProductController"
import {FindIDProductController} from "../../../../modules/product/useCase/FindIDProduct/FindIDProductController"
import {FindProductController} from "../../../../modules/product/useCase/FindProduct/FindProductController"

const createProductController = new CreateProductController()
const findIDProductController = new FindIDProductController()
const findProductController = new FindProductController()

const produtoRoute = Router()

produtoRoute.post("/", createProductController.handle)
produtoRoute.get("/:id", findIDProductController.handle)
produtoRoute.get("/", findProductController.handle)

export {produtoRoute}