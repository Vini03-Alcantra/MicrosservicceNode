import {OrderedRepository} from "../../infra/OrderedRepository";

class ReadOrderedUseCase {
    orderedRepository = new OrderedRepository();

    async execute(){
        const ordereds = await this.orderedRepository.find();
        return ordereds
    }
}

export {ReadOrderedUseCase}