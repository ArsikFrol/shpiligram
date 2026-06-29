/*
  Warnings:

  - Added the required column `is_mute` to the `chats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "chats" ADD COLUMN     "is_mute" BOOLEAN NOT NULL;
