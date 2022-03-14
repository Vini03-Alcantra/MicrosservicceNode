import {Product} from "@prisma/client"

import {ICreateProductDTO} from "../dto/ICreateProductDTO"
import {CreateProductUseCase} from "../useCase/CreateProduct/CreateProductUseCase"

describe("Testando os métodos da camada de Client", () => {
    const createProductUseCase = new CreateProductUseCase();

    

    it("Create Product", async () => {
        const product: ICreateProductDTO = {
            name: "Nescau",
            description: "Zero calorias",
            prize: 2.9
        }

        const productCreated = await createProductUseCase.execute(product);

        expect(productCreated).toHaveProperty("id")
        expect(productCreated.name).toBe(product.name)

    })


})