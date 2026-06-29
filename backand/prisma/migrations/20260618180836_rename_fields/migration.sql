/*
  Warnings:

  - You are about to drop the column `count_unread_messages` on the `chats` table. All the data in the column will be lost.
  - You are about to drop the column `time_send_last_message` on the `chats` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "chats" DROP COLUMN "count_unread_messages",
DROP COLUMN "time_send_last_message";
