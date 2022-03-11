import {Client} from "@prisma/client";
import {ICreateClientDTO} from "../dto/ICreateClientDTO";

interface IClientRepository {
    create(data: IClientRepository): Promise<void>;
    find(): Promise<Client[]>;
    findID({uuid: string}): Promise<Client | null>;
    delete({uuid: string}): Promise<void>;
    update(uuid: string, data: IClientRepository): Promise<void>;
}

export {IClientRepository}
