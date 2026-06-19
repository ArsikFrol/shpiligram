/*
  Warnings:

  - A unique constraint covering the columns `[chatId]` on the table `chats` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "chats" ALTER COLUMN "pinned" SET DEFAULT false,
ALTER COLUMN "folder" SET DEFAULT 'ALL_CHATS';

-- CreateTable
CREATE TABLE "storis" (
    "story_id" TEXT NOT NULL,
    "stories_photo" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "like" BOOLEAN NOT NULL DEFAULT false,
    "is_viewed" BOOLEAN NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "storis_story_id_key" ON "storis"("story_id");

-- CreateIndex
CREATE UNIQUE INDEX "chats_chatId_key" ON "chats"("chatId");

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_interlocutor_id_fkey" FOREIGN KEY ("interlocutor_id") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "storis" ADD CONSTRAINT "storis_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
