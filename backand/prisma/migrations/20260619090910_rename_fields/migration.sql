/*
  Warnings:

  - Changed the type of `release_date` on the `stories` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "stories" DROP COLUMN "release_date",
ADD COLUMN     "release_date" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "stories_viewed" (
    "view_id" TEXT NOT NULL,
    "viewed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "story_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stories_viewed_pkey" PRIMARY KEY ("view_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stories_viewed_user_id_story_id_key" ON "stories_viewed"("user_id", "story_id");

-- AddForeignKey
ALTER TABLE "stories_viewed" ADD CONSTRAINT "stories_viewed_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stories_viewed" ADD CONSTRAINT "stories_viewed_story_id_fkey" FOREIGN KEY ("story_id") REFERENCES "stories"("story_id") ON DELETE RESTRICT ON UPDATE CASCADE;
