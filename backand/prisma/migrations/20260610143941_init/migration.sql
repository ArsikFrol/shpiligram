/*
  Warnings:

  - The primary key for the `chats` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `chatId` on the `chats` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[chat_id]` on the table `chats` will be added. If there are existing duplicate values, this will fail.
  - The required column `chat_id` was added to the `chats` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_chat_id_fkey";

-- DropIndex
DROP INDEX "chats_chatId_key";

-- AlterTable
ALTER TABLE "chats" DROP CONSTRAINT "chats_pkey",
DROP COLUMN "chatId",
ADD COLUMN     "chat_id" TEXT NOT NULL,
ADD CONSTRAINT "chats_pkey" PRIMARY KEY ("chat_id");

-- CreateIndex
CREATE UNIQUE INDEX "chats_chat_id_key" ON "chats"("chat_id");

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "chats"("chat_id") ON DELETE RESTRICT ON UPDATE CASCADE;
