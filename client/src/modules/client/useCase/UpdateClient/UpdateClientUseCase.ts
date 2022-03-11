import {ClientRepository} from "../../infra/ClientRepository"
import {ICreateClientDTO} from "../../dto/ICreateClientDTO"

class UpdateClientUseCase {
    async execute(uuid: string, {
        name,
        cpf,
        email,
        phoneNumber
    }: ICreateClientDTO){

    }
}

export {UpdateClientUseCase}