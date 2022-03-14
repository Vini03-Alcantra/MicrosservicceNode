import {Client} from "@prisma/client"

import {ICreateClientDTO} from "../dto/ICreateClientDTO"
import {CreateClientUseCase} from "../useCase/CreateClient/CreateClientUseCase"
import {DeleteClientUseCase} from "../useCase/DeleteClient/DeleteClientUseCase"
import {ReadClientUseCase} from "../useCase/ReadClient/ReadClientUseCase"
import {UpdateClientUseCase} from "../useCase/UpdateClient/UpdateClientUseCase"

describe("Testando os métodos da camada de Client", () => {
    const createClientUseCase = new CreateClientUseCase()
    const deleteClientUseCase = new DeleteClientUseCase()
    const readClientUseCase = new ReadClientUseCase()
    const updateClientUseCase = new UpdateClientUseCase()

    

    it("Create User", async () => {
        const client: ICreateClientDTO = {
            name: "Vinícius de Alcântra Barros",
            email: "vinicius.barros@gmail.com",
            cpf: "123098121234",
            phoneNumber: "85 998980912"
        }

        const clientCreated = await createClientUseCase.execute(client);

        expect(clientCreated).toHaveProperty("id")
        expect(clientCreated.name).toBe(client.name)

    })


})