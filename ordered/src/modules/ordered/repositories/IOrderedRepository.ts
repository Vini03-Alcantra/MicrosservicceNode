import {Ordered} from "@prisma/client";
import {ICreateOrderedDTO} from "../dto/ICreateOrderedDTO";

interface IOrderedRepository {
    create(data: ICreateOrderedDTO): Promise<void>;
    find(): Promise<Ordered[]>;
    findID(id: string): Promise<Ordered>;
}

export {IOrderedRepository}