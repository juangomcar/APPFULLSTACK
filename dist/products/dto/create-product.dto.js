"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSongDto = exports.CreateAlbumDto = exports.CreateArtistDto = void 0;
class CreateArtistDto {
    constructor() {
        this.name = '';
    }
}
exports.CreateArtistDto = CreateArtistDto;
class CreateAlbumDto {
    constructor() {
        this.title = '';
        this.artistId = 0;
    }
}
exports.CreateAlbumDto = CreateAlbumDto;
class CreateSongDto {
    constructor() {
        this.title = '';
        this.duration = 0;
        this.albumId = 0;
    }
}
exports.CreateSongDto = CreateSongDto;
//# sourceMappingURL=create-product.dto.js.map