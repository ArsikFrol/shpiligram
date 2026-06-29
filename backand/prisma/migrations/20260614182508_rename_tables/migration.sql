/*
  Warnings:

  - Changed the type of `time_send_last_message` on the `chats` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "chats" DROP COLUMN "time_send_last_message",
ADD COLUMN     "time_send_last_message" TIMESTAMP(3) NOT NULL;
