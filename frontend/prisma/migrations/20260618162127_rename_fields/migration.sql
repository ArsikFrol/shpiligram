/*
  Warnings:

  - Changed the type of `send_time` on the `messages` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "messages_message_id_key";

-- AlterTable
ALTER TABLE "messages" ADD COLUMN     "is_edited" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_read" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "send_time",
ADD COLUMN     "send_time" TIMESTAMP(3) NOT NULL;
