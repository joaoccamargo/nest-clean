/*
  Warnings:

  - You are about to drop the column `contetnt` on the `questions` table. All the data in the column will be lost.
  - Added the required column `content` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "questions" DROP COLUMN "contetnt",
ADD COLUMN     "content" TEXT NOT NULL;
