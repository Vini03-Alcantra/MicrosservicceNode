import {ClientRepository} from "../../infra/ClientRepository";
import {ICreateClientDTO} from "../../dto/ICreateClientDTO"

class CreateClientUseCase {
    clientRepository = new ClientRepository()

    async execute({
        name,
        cpf,
        email,
        phoneNumber
    }: ICreateClientDTO) {
        const client = await this.clientRepository.create({name, cpf, email, phoneNumber})
        return client
    }
}

export {CreateClientUseCase}