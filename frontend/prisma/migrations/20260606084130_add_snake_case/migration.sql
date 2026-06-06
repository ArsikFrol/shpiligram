/*
  Warnings:

  - You are about to drop the column `chatId` on the `chat_members` table. All the data in the column will be lost.
  - You are about to drop the column `joinedAt` on the `chat_members` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `chat_members` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `chats` table. All the data in the column will be lost.
  - You are about to drop the column `lastMessageId` on the `chats` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `chats` table. All the data in the column will be lost.
  - You are about to drop the column `chatId` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `fileUrl` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `sentAt` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id,chat_id]` on the table `chat_members` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[last_message_id]` on the table `chats` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chat_id` to the `chat_members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `chat_members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `chats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chat_id` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender_id` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "chat_members" DROP CONSTRAINT "chat_members_chatId_fkey";

-- DropForeignKey
ALTER TABLE "chat_members" DROP CONSTRAINT "chat_members_userId_fkey";

-- DropForeignKey
ALTER TABLE "chats" DROP CONSTRAINT "chats_lastMessageId_fkey";

-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_chatId_fkey";

-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_senderId_fkey";

-- DropIndex
DROP INDEX "chat_members_userId_chatId_key";

-- DropIndex
DROP INDEX "chats_lastMessageId_key";

-- DropIndex
DROP INDEX "messages_chatId_sentAt_idx";

-- AlterTable
ALTER TABLE "chat_members" DROP COLUMN "chatId",
DROP COLUMN "joinedAt",
DROP COLUMN "userId",
ADD COLUMN     "chat_id" TEXT NOT NULL,
ADD COLUMN     "joined_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "chats" DROP COLUMN "createdAt",
DROP COLUMN "lastMessageId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "last_message_id" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "messages" DROP COLUMN "chatId",
DROP COLUMN "fileUrl",
DROP COLUMN "senderId",
DROP COLUMN "sentAt",
ADD COLUMN     "chat_id" TEXT NOT NULL,
ADD COLUMN     "file_url" TEXT,
ADD COLUMN     "sender_id" TEXT NOT NULL,
ADD COLUMN     "sent_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "chat_members_user_id_chat_id_key" ON "chat_members"("user_id", "chat_id");

-- CreateIndex
CREATE UNIQUE INDEX "chats_last_message_id_key" ON "chats"("last_message_id");

-- CreateIndex
CREATE INDEX "messages_chat_id_sent_at_idx" ON "messages"("chat_id", "sent_at");

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_last_message_id_fkey" FOREIGN KEY ("last_message_id") REFERENCES "messages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_members" ADD CONSTRAINT "chat_members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_members" ADD CONSTRAINT "chat_members_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "chats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "chats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
