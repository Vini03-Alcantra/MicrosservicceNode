import {Ordered, PrismaClient} from "@prisma/client";
import {ICreateOrderedDTO} from "../dto/ICreateOrderedDTO";
import {IOrderedRepository} from "../repositories/IOrderedRepository"

const prisma = new PrismaClient();

class OrderedRepository implements IOrderedRepository {
    async create({
        clientID,
        productID
    }: ICreateOrderedDTO): Promise<void> {
        try {
            await prisma.ordered.create({
                data: {
                    clientID,
                    productID
                }
            })
        } catch (err) {
            console.error(err)
            throw new Error("Erro na requisição")
        }
    }
    async find(): Promise<Ordered[]> {
        try {
            const ordereds = await prisma.ordered.findMany()
            return ordereds
        } catch (err) {
            console.error(err)
            throw new Error("Erro na requisição")
        }
    }
    async findID(id: string): Promise<Ordered> {
        try {
            const ordered = await prisma.ordered.findFirst({
                where: {orderedID: id}
            })

            if(!ordered){
                throw new Error("Ordered don't find")
            }

            return ordered
        } catch (err) {
            console.log(err)
            throw new Error("Erro na requisição")
        }
    }

}

export {OrderedRepository}