import {ClientRepository} from "../../infra/ClientRepository"

class ReadClientUseCase {
    clientRepository = new ClientRepository()
    
    async execute(){
        const clients = await this.clientRepository.find()
        return clients
    }
}   

export {ReadClientUseCase}