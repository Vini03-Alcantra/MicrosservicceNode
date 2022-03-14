-- CreateTable
CREATE TABLE `Payment` (
    `paymentID` VARCHAR(191) NOT NULL,
    `orderedID` VARCHAR(191) NOT NULL,
    `methodPayment` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`paymentID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
