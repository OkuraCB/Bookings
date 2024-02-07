-- CreateTable
CREATE TABLE `people` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_time` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `update_time` TIMESTAMP(0) NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(300) NOT NULL,

    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `representatives` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_time` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `update_time` TIMESTAMP(0) NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(300) NOT NULL,
    `customer` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Meeting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_time` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `update_time` TIMESTAMP(0) NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `start` DATETIME(3) NOT NULL,
    `end` DATETIME(3) NOT NULL,
    `gravity` ENUM('Mandatory', 'Optional') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_MeetingToRepresentative` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MeetingToRepresentative_AB_unique`(`A`, `B`),
    INDEX `_MeetingToRepresentative_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_MeetingToPeople` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MeetingToPeople_AB_unique`(`A`, `B`),
    INDEX `_MeetingToPeople_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_MeetingToRepresentative` ADD CONSTRAINT `_MeetingToRepresentative_A_fkey` FOREIGN KEY (`A`) REFERENCES `Meeting`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MeetingToRepresentative` ADD CONSTRAINT `_MeetingToRepresentative_B_fkey` FOREIGN KEY (`B`) REFERENCES `representatives`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MeetingToPeople` ADD CONSTRAINT `_MeetingToPeople_A_fkey` FOREIGN KEY (`A`) REFERENCES `Meeting`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MeetingToPeople` ADD CONSTRAINT `_MeetingToPeople_B_fkey` FOREIGN KEY (`B`) REFERENCES `people`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
