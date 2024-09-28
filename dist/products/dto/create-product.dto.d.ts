export declare class CreateArtistDto {
    name: string;
    genre?: string;
    album?: string;
    description?: string;
    copyright?: string;
    releaseDate?: Date;
    duration?: number;
}
export declare class CreateAlbumDto {
    title: string;
    releaseDate?: Date;
    artistId: number;
}
export declare class CreateSongDto {
    title: string;
    duration: number;
    albumId: number;
}
