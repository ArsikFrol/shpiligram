/*
  Warnings:

  - You are about to drop the column `is_mute` on the `chats` table. All the data in the column will be lost.
  - You are about to drop the column `last_message` on the `chats` table. All the data in the column will be lost.
  - You are about to drop the column `recently_online` on the `chats` table. All the data in the column will be lost.
  - The `folder` column on the `chats` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[last_message_id]` on the table `chats` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `time_send_last_message` on the `chats` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "chats" DROP COLUMN "is_mute",
DROP COLUMN "last_message",
DROP COLUMN "recently_online",
ADD COLUMN     "is_archived" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "last_message_id" TEXT,
ADD COLUMN     "mute_until" TIMESTAMP(3),
DROP COLUMN "folder",
ADD COLUMN     "folder" TEXT NOT NULL DEFAULT 'ALL_CHATS',
DROP COLUMN "time_send_last_message",
ADD COLUMN     "time_send_last_message" TIMESTAMP(3) NOT NULL;

-- DropEnum
DROP TYPE "Folder";

-- CreateIndex
CREATE UNIQUE INDEX "chats_last_message_id_key" ON "chats"("last_message_id");

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_last_message_id_fkey" FOREIGN KEY ("last_message_id") REFERENCES "messages"("message_id") ON DELETE SET NULL ON UPDATE CASCADE;
