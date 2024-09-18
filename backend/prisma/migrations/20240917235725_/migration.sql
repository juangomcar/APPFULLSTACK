/*
  Warnings:

  - You are about to drop the column `copyright` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `releaseDate` on the `Song` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Album" ADD COLUMN "imageUrl" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Song" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "albumId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Song_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Song" ("albumId", "createdAt", "duration", "id", "title", "updatedAt") SELECT "albumId", "createdAt", "duration", "id", "title", "updatedAt" FROM "Song";
DROP TABLE "Song";
ALTER TABLE "new_Song" RENAME TO "Song";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
