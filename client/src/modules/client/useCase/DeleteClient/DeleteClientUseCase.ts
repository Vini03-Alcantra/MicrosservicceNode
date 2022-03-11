import {ClientRepository} from "../../infra/ClientRepository"

class DeleteClientUseCase {
    clientRepository = new ClientRepository()

    async execute(uuid: string) {
        await this.clientRepository.delete(uuid)
    }
}

export {DeleteClientUseCase}