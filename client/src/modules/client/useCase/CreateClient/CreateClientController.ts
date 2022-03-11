import { Request, Response } from "express";
import {CreateClientUseCase} from "./CreateClientUseCase"

class CreateClientController {
    async handle(req: Request, res: Response): Promise<Response>{        
        const {name, cpf, email, phoneNumber} = req.body;
        const createClientUseCase = new CreateClientUseCase();

        try {
            await createClientUseCase.execute({name, cpf, email, phoneNumber})

            return res.status(201).json({"msg": "Client cadastrado com sucesso"})
        } catch (error) {
            return res.status(400).json({"msg": "Não foi possível cadastrar o client"})
        }

    }
}

export {CreateClientController}