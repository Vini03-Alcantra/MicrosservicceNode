import {OrderedRepository} from "../../infra/OrderedRepository";
import {ICreateOrderedDTO} from "../../dto/ICreateOrderedDTO"

class CreateOrderedUseCase {
    orderedRepository = new OrderedRepository();

    async execute({
        cliendID,
        productID
    }: ICreateOrderedDTO) {
        await this.orderedRepository.create({cliendID, productID})
    }
}

export {CreateOrderedUseCase}
