import { CreateArtistDto, CreateAlbumDto, CreateSongDto } from './create-product.dto';
declare const UpdateArtistDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateArtistDto>>;
export declare class UpdateArtistDto extends UpdateArtistDto_base {
}
declare const UpdateAlbumDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAlbumDto>>;
export declare class UpdateAlbumDto extends UpdateAlbumDto_base {
}
declare const UpdateSongDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSongDto>>;
export declare class UpdateSongDto extends UpdateSongDto_base {
}
export {};
