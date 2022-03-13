import {OrderedRepository} from "../../infra/OrderedRepository";

class ReadIDOrderedUseCase {
    orderedRepository = new OrderedRepository();

    async execute(id: string){
        const ordered = await this.orderedRepository.findID(id)
        return ordered
    }
}

export {ReadIDOrderedUseCase}