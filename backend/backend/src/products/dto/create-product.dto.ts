
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
    title: string = '';  
    duration: number = 0; 
    albumId: number = 0; 
  }
  