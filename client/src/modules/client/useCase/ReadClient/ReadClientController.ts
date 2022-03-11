import { Request, Response } from "express"
import {ReadClientUseCase} from "./ReadClientUseCase"


class ReadClienbtController {
    readClientUseCase = new ReadClientUseCase();

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const clients = await this.readClientUseCase.execute();

            return res.status(201).json(clients)
        } catch (error) {
            return res.status(400).json({"msg": "Não foi possível localizar os clients"})
        }
    }
}

export {ReadClienbtController}