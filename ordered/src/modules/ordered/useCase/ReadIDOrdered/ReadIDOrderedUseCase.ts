import {OrderedRepository} from "../../infra/OrderedRepository";
import axios from "axios"

const productUrl = "http://localhost:3010/";
const clientUrl = "http://localhost:3009/";
class ReadIDOrderedUseCase {
    orderedRepository = new OrderedRepository();

    async execute(id: string){
        const ordered = await this.orderedRepository.findID(id);

        const client = await axios.get(clientUrl + ordered.clientID)
        const product = await axios.get(productUrl + ordered.productID)

        const OrderedDetails = {
            clientName: client.data.name,
            nameProduct: product.data.name,
            prize: product.data.prize
        }

        return OrderedDetails
    }
}

export {ReadIDOrderedUseCase}