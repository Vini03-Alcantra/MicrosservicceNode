import {Client, PrismaClient} from "@prisma/client";
import {ICreateClientDTO} from "../dto/ICreateClientDTO";
import {IClientRepository} from "../repositories/IClientRepository";

const prisma = new PrismaClient()

class ClientRepository implements IClientRepository {
    async create({
        name,
        cpf,
        email,
        phoneNumber
    }: ICreateClientDTO): Promise<Client> {
        try {
            const client = await prisma.client.create({
                data: {
                    name, 
                    email, 
                    cpf,
                    phoneNumber
                }
            })

            return client
        } catch (err) {
            console.error(err)
            throw new Error("Erro na requisição")
        }    
    }

    async find(): Promise<Client[]> {
        const clients = await prisma.client.findMany();
        return clients    
    }

    async findID( uuid: string ): Promise<Client | null> {
        const client = await prisma.client.findFirst({
            where: {
                id: uuid
            }
        })

        if(!client){
            return null
        }

        return client
    }

    async delete(uuid: string): Promise<void> {
        try {
            await prisma.client.delete({
                where: {id: uuid}
            })
        } catch (err) {
            console.error(err);
            throw new Error("Erro na requisição")
        }
    }

    async update(uuid: string, {
        name,
        cpf,
        email,
        phoneNumber
    }: ICreateClientDTO): Promise<void> {
        try {
            await prisma.client.update({
                where: {id: uuid},
                data: {
                    name,
                    cpf,
                    email,
                    phoneNumber
                }
            })
        } catch (err) {
            console.error(err);
            throw new Error("Erro na requisição")
        }
    }

}

export {ClientRepository}
