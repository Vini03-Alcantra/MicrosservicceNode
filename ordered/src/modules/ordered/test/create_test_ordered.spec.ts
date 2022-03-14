import {ICreateOrderedDTO} from "../dto/ICreateOrderedDTO"
import {CreateOrderedUseCase} from "../useCase/CreateOrdered/CreateOrderedUseCase"


describe("Testando os métodos da camada de Client", () => {
    const createOrderedUseCase = new CreateOrderedUseCase()

    it("Create User", async () => {
        const ordered: ICreateOrderedDTO = {
            clientID: "2",
            productID: "2"
        }

        const orderedCreated = await createOrderedUseCase.execute(ordered);

        expect(orderedCreated).toHaveProperty("orderedID")
        expect(orderedCreated.clientID).toBe(ordered.clientID)
        expect(orderedCreated.productID).toBe(ordered.productID)

    })


})