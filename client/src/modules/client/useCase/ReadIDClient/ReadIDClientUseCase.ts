import {ClientRepository} from "../../infra/ClientRepository"

class ReadIDClientUseCase {
    clientRepository = new ClientRepository()
    
    async execute(id: string){
        const client = await this.clientRepository.findID(id)
        return client
    }
}   

export {ReadIDClientUseCase}