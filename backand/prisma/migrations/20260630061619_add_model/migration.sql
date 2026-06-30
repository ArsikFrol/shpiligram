-- CreateEnum
CREATE TYPE "howSee" AS ENUM ('EVERYBODY', 'SELECT_LIST', 'NOBODY');

-- CreateTable
CREATE TABLE "users_settings" (
    "user_settings_id" TEXT NOT NULL,
    "how_see_mobile_phone" "howSee" NOT NULL DEFAULT 'EVERYBODY',
    "how_see_last_seen" "howSee" NOT NULL DEFAULT 'EVERYBODY',
    "how_see_birthday" "howSee" NOT NULL DEFAULT 'EVERYBODY',
    "how_see_gifts" "howSee" NOT NULL DEFAULT 'EVERYBODY',
    "how_see_bio" "howSee" NOT NULL DEFAULT 'EVERYBODY',
    "how_can_call" "howSee" NOT NULL DEFAULT 'EVERYBODY',
    "how_can_sent_voice" "howSee" NOT NULL DEFAULT 'EVERYBODY',
    "how_can_sent_messages" "howSee" NOT NULL DEFAULT 'EVERYBODY',
    "how_can_forwarded_messages" "howSee" NOT NULL DEFAULT 'EVERYBODY',
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_settings_pkey" PRIMARY KEY ("user_settings_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_settings_user_id_key" ON "users_settings"("user_id");

-- AddForeignKey
ALTER TABLE "users_settings" ADD CONSTRAINT "users_settings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
