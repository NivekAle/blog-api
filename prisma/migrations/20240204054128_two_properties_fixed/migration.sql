-- AlterTable
ALTER TABLE `post` MODIFY `published_in` DATE NOT NULL,
    MODIFY `created_at` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
