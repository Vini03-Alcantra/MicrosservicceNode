import {OrderedRepository} from "../../infra/OrderedRepository";
import {ICreateOrderedDTO} from "../../dto/ICreateOrderedDTO"

class CreateOrderedUseCase {
    orderedRepository = new OrderedRepository();

    async execute({
        clientID,
        productID
    }: ICreateOrderedDTO) {
        const orderedCreated = await this.orderedRepository.create({clientID, productID})
        return orderedCreated
    }
}

export {CreateOrderedUseCase}
