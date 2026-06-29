/*
  Warnings:

  - Added the required column `last_message_at` to the `chats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "chats" ADD COLUMN     "last_message_at" TIMESTAMP(3) NOT NULL;
