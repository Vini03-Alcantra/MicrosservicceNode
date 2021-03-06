import {ICreateProductDTO} from "../../dto/ICreateProductDTO";
import {ProductRepository} from "../../infra/ProductRepository"

class CreateProductUseCase {
    productRepository = new ProductRepository()

    async execute({
        name,
        description,
        prize
    }: ICreateProductDTO){
        const productCreated = await this.productRepository.create({name, description, prize})        
        return productCreated
    }
}

export {CreateProductUseCase}