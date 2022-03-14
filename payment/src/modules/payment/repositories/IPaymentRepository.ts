import {Payment} from "@prisma/client";
import {ÌCreatePaymentDTO} from "../dto/ICreatePaymentDTO";

interface IPaymentRepository {
    create(data: ÌCreatePaymentDTO): Promise<void>;
    find(): Promise<Payment[]>;
    findID(id: string): Promise<Payment>;
}

export {IPaymentRepository}