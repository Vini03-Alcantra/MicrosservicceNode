import {ProductRepository} from "../../infra/ProductRepository"

class FindProductUseCase {
    productRepository = new ProductRepository()

    async execute() {
        const products = await this.productRepository.find()

        return products
    }
}

export {FindProductUseCase}
