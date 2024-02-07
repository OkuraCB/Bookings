-- AlterTable
ALTER TABLE `meeting` ADD COLUMN `roomId` INTEGER NULL;

-- CreateTable
CREATE TABLE `rooms` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_time` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `update_time` TIMESTAMP(0) NULL,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `meeting` ADD CONSTRAINT `fk_meeting_room1` FOREIGN KEY (`roomId`) REFERENCES `rooms`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
