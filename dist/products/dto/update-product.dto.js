"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSongDto = exports.UpdateAlbumDto = exports.UpdateArtistDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_product_dto_1 = require("./create-product.dto");
class UpdateArtistDto extends (0, mapped_types_1.PartialType)(create_product_dto_1.CreateArtistDto) {
}
exports.UpdateArtistDto = UpdateArtistDto;
class UpdateAlbumDto extends (0, mapped_types_1.PartialType)(create_product_dto_1.CreateAlbumDto) {
}
exports.UpdateAlbumDto = UpdateAlbumDto;
class UpdateSongDto extends (0, mapped_types_1.PartialType)(create_product_dto_1.CreateSongDto) {
}
exports.UpdateSongDto = UpdateSongDto;
//# sourceMappingURL=update-product.dto.js.map