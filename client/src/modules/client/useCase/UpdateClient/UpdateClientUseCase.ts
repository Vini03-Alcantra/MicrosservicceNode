import {ClientRepository} from "../../infra/ClientRepository"
import {ICreateClientDTO} from "../../dto/ICreateClientDTO"

class UpdateClientUseCase {
    clientRepository = new ClientRepository()

    async execute(uuid: string, {
        name,
        cpf,
        email,
        phoneNumber
    }: ICreateClientDTO){
        await this.clientRepository.update(uuid, {name, cpf, email, phoneNumber})
    }
}

export {UpdateClientUseCase}