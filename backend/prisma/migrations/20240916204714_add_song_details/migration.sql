PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Album" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "releaseDate" DATETIME,
    "artistId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Album_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Album" ("artistId", "createdAt", "id", "releaseDate", "title", "updatedAt") SELECT "artistId", coalesce("createdAt", CURRENT_TIMESTAMP) AS "createdAt", "id", "releaseDate", "title", "updatedAt" FROM "Album";
DROP TABLE "Album";
ALTER TABLE "new_Album" RENAME TO "Album";
CREATE TABLE "new_Artist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "genre" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Artist" ("createdAt", "genre", "id", "name", "updatedAt") SELECT coalesce("createdAt", CURRENT_TIMESTAMP) AS "createdAt", "genre", "id", "name", "updatedAt" FROM "Artist";
DROP TABLE "Artist";
ALTER TABLE "new_Artist" RENAME TO "Artist";
CREATE UNIQUE INDEX "Artist_name_key" ON "Artist"("name");
CREATE TABLE "new_Song" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "albumId" INTEGER NOT NULL,
    "description" TEXT,
    "genre" TEXT,
    "releaseDate" DATETIME,
    "copyright" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Song_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Song" ("albumId", "copyright", "createdAt", "description", "duration", "genre", "id", "releaseDate", "title", "updatedAt") SELECT "albumId", "copyright", coalesce("createdAt", CURRENT_TIMESTAMP) AS "createdAt", "description", "duration", "genre", "id", "releaseDate", "title", "updatedAt" FROM "Song";
DROP TABLE "Song";
ALTER TABLE "new_Song" RENAME TO "Song";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
