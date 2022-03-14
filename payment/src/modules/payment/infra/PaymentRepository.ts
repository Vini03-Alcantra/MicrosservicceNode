import {Payment, PrismaClient} from "@prisma/client";
import {ÌCreatePaymentDTO} from "../dto/ICreatePaymentDTO";
import {IPaymentRepository} from "../repositories/IPaymentRepository"

const prisma = new PrismaClient();

class PaymentRepository implements IPaymentRepository {
    async create({
        orderedID,
        methodPayment
    }: ÌCreatePaymentDTO): Promise<void> {
        try {
            await prisma.payment.create({
                data: {
                    orderedID,
                    methodPayment
                }
            })
        } catch (err) {
            console.error(err)
            throw new Error("Erro na requisição")
        }
    }
    async find(): Promise<Payment[]> {
        try {
            const payments = await prisma.payment.findMany()
            return payments
        } catch (err) {
            console.error(err)
            throw new Error("Erro na requisição")
        }
    }
    async findID(id: string): Promise<Payment> {
        try {
            const payment = await prisma.payment.findFirst({
                where: {paymentID: id}
            })

            if(!payment){
                throw new Error("payment don't find")
            }

            return payment
        } catch (err) {
            console.log(err)
            throw new Error("Erro na requisição")
        }
    }

}

export {PaymentRepository}