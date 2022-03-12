import {Product} from "@prisma/client";
import {ICreateProductDTO} from "../dto/ICreateProductDTO"

interface IProductRepository {
    create(data: ICreateProductDTO): Promise<void>;
    find(): Promise<Product[]>;
    findById(uuid: string): Promise<Product | null>;
}

export {IProductRepository}