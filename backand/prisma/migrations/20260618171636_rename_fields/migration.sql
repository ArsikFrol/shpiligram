/*
  Warnings:

  - You are about to drop the column `recently_online` on the `users` table. All the data in the column will be lost.
  - Added the required column `last_seen` to the `users` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `birthday` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "recently_online",
ADD COLUMN     "is_online" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "last_seen" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
DROP COLUMN "birthday",
ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;
