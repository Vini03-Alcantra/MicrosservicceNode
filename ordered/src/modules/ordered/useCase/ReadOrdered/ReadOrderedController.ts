import { Request, Response } from "express";
import {ReadOrderedUseCase} from "./ReadOrderedUseCase"
class ReadOrderedController {
    async handle(req: Request, res: Response) {
        try {
            return res.status(200).json()
        } catch (error) {
            return res.status(400).json({"msg": ""})
        }
    }
}

export {ReadOrderedController}