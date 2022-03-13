import {OrderedRepository} from "../../infra/OrderedRepository";
import {ICreateOrderedDTO} from "../../dto/ICreateOrderedDTO"

class CreateOrderedUseCase {
    orderedRepository = new OrderedRepository();

    async execute({
        clientID,
        productID
    }: ICreateOrderedDTO) {
        await this.orderedRepository.create({clientID, productID})
    }
}

export {CreateOrderedUseCase}
