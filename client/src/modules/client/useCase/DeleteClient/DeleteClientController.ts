import { Request, Response } from "express";
import {DeleteClientUseCase} from "./DeleteClientUseCase"
class DeleteClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {uuid} = req.params;
        const deleteClientUseCase = new DeleteClientUseCase()

        try {
            await deleteClientUseCase.execute(uuid)

            return res.status(201).json({"msg": "Client deletado com sucesso"})
        } catch (error) {
            return res.status(400).json({"msg": "Não foi possível deletar o client"})
        }
    }
}

export {DeleteClientController}