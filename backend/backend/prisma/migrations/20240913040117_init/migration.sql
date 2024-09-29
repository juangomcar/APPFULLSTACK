-- CreateTable for Artist
CREATE TABLE Artist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  
    name TEXT NOT NULL,
    genre TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable for Album
CREATE TABLE Album (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    releaseDate DATETIME,
    artistId INTEGER NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (artistId) REFERENCES Artist(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable for Song
CREATE TABLE Song (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    duration INTEGER NOT NULL,
    albumId INTEGER NOT NULL,
    description TEXT,
    genre TEXT,
    releaseDate DATETIME,
    copyright TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (albumId) REFERENCES Album(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Trigger para actualizar el campo updatedAt en Artist
CREATE TRIGGER update_artist_updatedAt
AFTER UPDATE ON Artist
FOR EACH ROW
BEGIN
    UPDATE Artist SET updatedAt = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;

-- Trigger para actualizar el campo updatedAt en Album
CREATE TRIGGER update_album_updatedAt
AFTER UPDATE ON Album
FOR EACH ROW
BEGIN
    UPDATE Album SET updatedAt = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;

-- Trigger para actualizar el campo updatedAt en Song
CREATE TRIGGER update_song_updatedAt
AFTER UPDATE ON Song
FOR EACH ROW
BEGIN
    UPDATE Song SET updatedAt = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;
