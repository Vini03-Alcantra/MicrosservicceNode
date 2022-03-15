import {Request, Response} from "express"
import {CreateProductUseCase} from "./CreateProductUseCase"
class CreateProductController {    
    async handle(req: Request, res: Response){
        const {name, description, prize} = req.body;
        const createProductUseCase = new CreateProductUseCase()
        try {
            await createProductUseCase.execute({name, description, prize})
            return res.status(200).json({"msg": "Producto cadastrado com sucesso"})
        } catch (err) {
            console.error(err)
            return res.status(400).json({"msg": "Producto não pòde ser cadastrado"})
        }

    }
}

export {CreateProductController}