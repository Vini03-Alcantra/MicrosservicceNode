import {ClientRepository} from "../../infra/ClientRepository"
import {ICreateClientDTO} from "../../dto/ICreateClientDTO"

class CreateClientUseCase {
    clientRepository = new ClientRepository()

    async execute({
        name,
        cpf,
        email,
        phoneNumber
    }: ICreateClientDTO) {
        await this.clientRepository.create({name, cpf, email, phoneNumber})
    }
}

export {CreateClientUseCase}