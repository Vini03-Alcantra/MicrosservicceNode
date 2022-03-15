import { Request, Response } from "express"
import {ReadIDClientUseCase} from "./ReadIDClientUseCase"


class ReadIDClienbtController {    
    async handle(req: Request, res: Response): Promise<Response> {
        const readIDClientUseCase = new ReadIDClientUseCase();
        const {id} = req.params;
        try {
            const client = await readIDClientUseCase.execute(id);

            return res.status(201).json(client)
        } catch (error) {
            return res.status(400).json({"msg": "Não foi possível localizar o client"})
        }
    }
}

export {ReadIDClienbtController}