import {ProductRepository} from "../../infra/ProductRepository"

class FindIDProductUseCase {
    productRepository = new ProductRepository()

    async execute(uuid: string) {
        const product = await this.productRepository.findById(uuid)

        return product
    }
}

export {FindIDProductUseCase}