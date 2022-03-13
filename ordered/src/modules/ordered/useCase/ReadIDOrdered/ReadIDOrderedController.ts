import { Request, Response } from "express";
import {ReadIDOrderedUseCase} from "./ReadIDOrderedUseCase"

class ReadIDOrderedController {
    async handle(req: Request, res: Response) {
        try {
            const {id} = req.body;
            const readIDOrderedUseCase = new ReadIDOrderedUseCase()
            const ordered = await readIDOrderedUseCase.execute(id)            

            return res.status(200).json(ordered)
        } catch (error) {
            return res.status(400).json({"msg": ""})
        }
    }
}

export {ReadIDOrderedController}