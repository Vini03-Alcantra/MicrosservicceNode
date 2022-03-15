import {Request, Response} from "express"
import {FindProductUseCase} from "./FindProductUseCase"
class FindProductController {    
    async handle(req: Request, res: Response){
        const findProductUseCase = new FindProductUseCase()
        try {
            const products = await findProductUseCase.execute()
            return res.status(200).json(products)
        } catch (error) {
            return res.status(400).json({"msg": "Producto não pòde ser encontrado"})
        }
    }
}


export {FindProductController}