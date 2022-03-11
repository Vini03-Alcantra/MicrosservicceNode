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
    }: ICreateClientDTO): Promise<void> {
        try {
            const result = await prisma.client.create({
                data: {
                    name, 
                    email, 
                    cpf,
                    phoneNumber
                }
            })
        } catch (err) {
            console.error(err)
            throw new Error(err)
        }    
    }

    async find(): Promise<Client[]> {
        const clients = await prisma.client.findMany();
        return clients    
    }

    async findID( uuid: string ): Promise<Client> {
        const client = await prisma.client.findFirst({
            where: {
                id: uuid
            }
        })

        return client
    }

    async delete(uuid: string): Promise<void> {
        try {
            await prisma.client.delete({
                where: {id: uuid}
            })
        } catch (err) {
            console.error(err);
            throw new Error(err)
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
            throw new Error(err)    
        }
    }

}

export {ClientRepository}
