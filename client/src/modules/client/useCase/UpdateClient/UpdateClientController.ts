import { Request, Response } from "express";
import {UpdateClientUseCase} from "./UpdateClientUseCase"

class UpdateClientController {
    async handle(req: Request, res: Response): Promise<Response>{
        const {uuid, name, cpf, email, phoneNumber} = req.body;
        const updateClientUseCase = new UpdateClientUseCase();

        try {
            await updateClientUseCase.execute(uuid, {name, cpf, email, phoneNumber})

            return res.status(201).json({msg: "Cliente atualiza com sucesso"})
        } catch (err) {
            return res.status(400).json({msg: "Não foi possível atualizar o cliente"})
        }
    }
}

export {UpdateClientController}