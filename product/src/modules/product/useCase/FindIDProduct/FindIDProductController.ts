import {Request, Response} from "express"
import {FindIDProductUseCase} from "./FindIDProductUseCase"
class FindIDProductController {
    findIDProductUseCase = new FindIDProductUseCase()
    async handle(req: Request, res: Response){
        const {uuid} = req.params;        
        try {
            const product = await this.findIDProductUseCase.execute(uuid)
            return res.status(200).json(product)
        } catch (error) {
            return res.status(400).json({"msg": "Producto não pòde ser encontrado"})
        }
    }
}


export {FindIDProductController}