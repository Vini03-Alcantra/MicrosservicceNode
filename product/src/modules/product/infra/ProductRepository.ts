import {Product, PrismaClient} from "@prisma/client";
import {ICreateProductDTO} from "../dto/ICreateProductDTO";
import {IProductRepository} from "../repositories/IProductRepository";

const prisma = new PrismaClient()

class ProductRepository implements IProductRepository {
    async create({
        name,
        description,
        prize
    }: ICreateProductDTO): Promise<Product> {
        try {
            const product = await prisma.product.create({
                data: {
                    name,
                    description,
                    prize
                }
            })

            return product
        } catch (err) {
            console.error(err)
            throw new Error("Erro na requisição")
        }
    }
    async find(): Promise<Product[]> {
        try {
            const products = await prisma.product.findMany()
            return products
        } catch (err) {
            console.error(err)
            throw new Error("Erro na requisição")
        }
    }
    async findById(uuid: string): Promise<Product | null> {
        try {
            const product = await prisma.product.findFirst({
                where: {
                    id: uuid
                }
            })

            if(!product){
                return null
            }

            return product
        } catch (err) {
            console.error(err)
            throw new Error("Erro na requisição")
        }
    }

}

export {ProductRepository}