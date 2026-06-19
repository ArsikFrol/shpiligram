-- CreateEnum
CREATE TYPE "Folder" AS ENUM ('ALL_CHATS', 'STUDY');

-- CreateTable
CREATE TABLE "chats" (
    "chatId" TEXT NOT NULL,
    "recently_online" TEXT NOT NULL,
    "interlocutor_id" TEXT NOT NULL,
    "last_message" TEXT NOT NULL,
    "time_send_last_message" TEXT NOT NULL,
    "pinned" BOOLEAN NOT NULL,
    "count_unread_messages" INTEGER NOT NULL,
    "folder" "Folder" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chats_pkey" PRIMARY KEY ("chatId")
);
