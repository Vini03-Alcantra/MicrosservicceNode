import {OrderedRepository} from "../../infra/OrderedRepository";

import axios from "axios"

const productUrl = "http://localhost:3010/";
const clientUrl = "http://localhost:3009/";

type OrderedList = {
    clientName: string;
    nameProduct: string;
    prize: string;
}

class ReadOrderedUseCase {
    orderedRepository = new OrderedRepository();

    async execute(): Promise<OrderedList[]>{
        const ordereds = await this.orderedRepository.find();
        let orderedsList!: OrderedList[];

        ordereds.forEach(async (ordered) => {            
            const client = await axios.get(clientUrl + ordered.clientID)
            const product = await axios.get(productUrl + ordered.productID)

            const OrderedDetails = {
                clientName: client.data.name,
                nameProduct: product.data.name,
                prize: product.data.prize
            }

            orderedsList.push(OrderedDetails)
        })

        return orderedsList
    }
}

export {ReadOrderedUseCase}