import { Request, Response } from "express";
import {CreateOrderedUseCase} from "./CreateOrderedUseCase"

class CreateOrderedController {    
    async handle(req: Request, res: Response) {
        const {clientID, productID} = req.body;
        const createOrderedUseCase = new CreateOrderedUseCase();
        const orderedCreated = await createOrderedUseCase.execute({clientID, productID})
        try {
            return res.status(200).json(orderedCreated)
        } catch (error) {
            return res.status(400).json({"msg": ""})
        }
    }
}

export {CreateOrderedController}