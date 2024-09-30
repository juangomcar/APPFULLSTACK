
export class CreateArtistDto {
  name: string = '';  
  genre?: string;  
  album?: string;  
  description?: string;  
  copyright?: string; 
  releaseDate?: Date;  
  duration?: number; 
}

 
  export class CreateAlbumDto {
    title: string = '';  
    releaseDate?: Date;
    artistId: number = 0;  
  }
  

  export class CreateSongDto {
    title!: string;
    duration!: number;
    albumId!: number;
    artistId?: number;
    createdAt?: Date; 
    updatedAt?: Date;
  }