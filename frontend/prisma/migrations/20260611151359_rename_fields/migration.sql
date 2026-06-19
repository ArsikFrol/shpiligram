/*
  Warnings:

  - Added the required column `owner_id` to the `chats` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "chats_chat_id_key";

-- AlterTable
ALTER TABLE "chats" ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
