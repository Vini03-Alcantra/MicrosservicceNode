-- CreateTable
CREATE TABLE `ordered` (
    `orderedID` VARCHAR(191) NOT NULL,
    `clientID` VARCHAR(191) NOT NULL,
    `productID` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`orderedID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
