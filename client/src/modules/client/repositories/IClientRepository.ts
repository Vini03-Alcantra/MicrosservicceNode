import {Client} from "@prisma/client";
import {ICreateClientDTO} from "../dto/ICreateClientDTO";

interface IClientRepository {
    create(data: ICreateClientDTO): Promise<Client>;
    find(): Promise<Client[]>;
    findID(uuid: string): Promise<Client | null>;
    delete(uuid: string): Promise<void>;
    update(uuid: string, data: ICreateClientDTO): Promise<void>;
}

export {IClientRepository}
