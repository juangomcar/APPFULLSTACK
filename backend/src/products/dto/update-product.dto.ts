import { PartialType } from '@nestjs/mapped-types';
import { CreateArtistDto, CreateAlbumDto, CreateSongDto } from './create-product.dto';


export class UpdateArtistDto extends PartialType(CreateArtistDto) {}


export class UpdateAlbumDto extends PartialType(CreateAlbumDto) {}


export class UpdateSongDto extends PartialType(CreateSongDto) {}
