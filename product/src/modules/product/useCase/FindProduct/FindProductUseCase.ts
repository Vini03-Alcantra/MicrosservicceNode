import {Request, Response} from "express"
import {FindProductUseCase} from "./FindProductController"
class FindIDProductController {
    findProductUseCase = new FindProductUseCase()
    async handle(req: Request, res: Response){
        try {
            const products = await this.findProductUseCase.execute()
            return res.status(200).json(products)
        } catch (error) {
            return res.status(400).json({"msg": "Producto não pòde ser encontrado"})
        }
    }
}


export {FindIDProductController}