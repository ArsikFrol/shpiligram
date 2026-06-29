/*
  Warnings:

  - You are about to drop the column `count_viewed` on the `stories` table. All the data in the column will be lost.
  - You are about to drop the column `is_viewed` on the `stories` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "stories" DROP COLUMN "count_viewed",
DROP COLUMN "is_viewed";
