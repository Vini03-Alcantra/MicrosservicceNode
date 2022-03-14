enum Methodpayment {
    debitCard = "Debit",
    creditCard = "Credit",
    cash = "Cash"
}

class ÌCreatePaymentDTO {
    orderedID: string;
    methodPayment: Methodpayment
}

export {ÌCreatePaymentDTO}