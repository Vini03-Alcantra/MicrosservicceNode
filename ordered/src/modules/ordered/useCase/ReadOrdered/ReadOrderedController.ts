import { Request, Response } from "express";
import {ReadOrderedUseCase} from "./ReadOrderedUseCase"
class ReadOrderedController {    
    async handle(req: Request, res: Response) {
        const readOrderedUseCase = new ReadOrderedUseCase()
        try {
            const ordered = await readOrderedUseCase.execute()
            return res.status(200).json(ordered)
        } catch (error) {
            return res.status(400).json({"msg": ""})
        }
    }
}

export {ReadOrderedController}