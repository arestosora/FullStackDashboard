-- CreateTable
CREATE TABLE `Admins` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Admins_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `UserID` VARCHAR(191) NOT NULL,
    `Pedidos` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_UserID_key`(`UserID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedidos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Referencia` VARCHAR(191) NOT NULL,
    `Cuentas_Asignadas` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `SN` VARCHAR(191) NOT NULL,
    `UserID` VARCHAR(191) NOT NULL,
    `Pedido` VARCHAR(191) NOT NULL,
    `Estado` VARCHAR(191) NOT NULL DEFAULT 'Pendiente',
    `Comprobante` VARCHAR(191) NOT NULL,
    `GuildID` VARCHAR(191) NOT NULL DEFAULT '1133932007236309072',
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `Pedidos_Referencia_key`(`Referencia`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Config` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `GuildID` VARCHAR(191) NOT NULL,
    `Pedidos_Enabled` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Config_GuildID_key`(`GuildID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cuentas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nickname` VARCHAR(191) NOT NULL,
    `Username` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `RPDisponibles` INTEGER NOT NULL DEFAULT 2295,
    `Nota` VARCHAR(191) NULL,
    `Estado` VARCHAR(191) NOT NULL DEFAULT 'Disponible',
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `Cuentas_Username_key`(`Username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CuentasBanco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nickname` VARCHAR(191) NOT NULL,
    `Username` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `RPDisponibles` INTEGER NOT NULL DEFAULT 2295,
    `Nota` VARCHAR(191) NULL,
    `Estado` VARCHAR(191) NOT NULL DEFAULT 'Disponible',
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `CuentasBanco_Username_key`(`Username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CuentasCombo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nickname` VARCHAR(191) NOT NULL,
    `Username` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `RPDisponibles` INTEGER NOT NULL DEFAULT 2295,
    `Nota` VARCHAR(191) NULL,
    `Estado` VARCHAR(191) NOT NULL DEFAULT 'Disponible',
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `CuentasCombo_Username_key`(`Username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
