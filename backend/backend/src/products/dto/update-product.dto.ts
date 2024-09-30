import { PartialType } from '@nestjs/mapped-types';
import { CreateArtistDto, CreateSongDto } from './create-product.dto';


export class UpdateArtistDto extends PartialType(CreateArtistDto) {
    name: string = '';  
    genre?: string;  
    album?: string;  
    description?: string;  
    copyright?: string; 
    releaseDate?: Date;  
    duration?: number; 
}


export class UpdateAlbumDto {
    title!: string;  
    releaseDate?: Date;  
    artistId?: number;  
    imageUrl?: string;
  }

export class UpdateSongDto extends PartialType(CreateSongDto) {}
