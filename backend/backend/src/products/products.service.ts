import { Injectable, NotFoundException, ConflictException, InternalServerErrorException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateArtistDto, CreateAlbumDto, CreateSongDto } from './dto/create-product.dto';
import { UpdateArtistDto, UpdateAlbumDto, UpdateSongDto } from './dto/update-product.dto';  
import { Prisma } from '@prisma/client'; 

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(
    ProductsService.name
    ); 
  constructor(private prismaService: PrismaService) {}



  async createArtist(createArtistDto: CreateArtistDto) {
    try {
      return await this.prismaService.artist.create({
        data: createArtistDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException(`Artist with name "${createArtistDto.name}" already exists`);
      }
      throw new InternalServerErrorException();
    }
  }
  

  async findAllArtists() {
    return this.prismaService.artist.findMany();
  }

  async findOneArtist(id: number) {
    const artist = await this.prismaService.artist.findUnique({
      where: { id },
    });

    if (!artist) {
      throw new NotFoundException(`Artist with id ${id} not found`);
    }

    return artist;
  }

  async updateArtist(id: number, updateArtistDto: UpdateArtistDto) {
    try {
      return this.prismaService.artist.update({
        where: { id },
        data: updateArtistDto,
      });
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async removeArtist(id: number) {
    try {
      return this.prismaService.artist.delete({
        where: { id },
      });
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }



  async createAlbum(createAlbumDto: CreateAlbumDto) {
    try {
      return await this.prismaService.album.create({
        data: createAlbumDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException(`Album with title "${createAlbumDto.title}" already exists`);
      }
      throw new InternalServerErrorException();
    }
  }

  async findAllAlbums() {
    return this.prismaService.album.findMany();
  }

  async findOneAlbum(id: number): Promise<{ id: number; title: string; releaseDate: Date | null; artistId: number; imageUrl: string | null; createdAt: Date; updatedAt: Date; } | null> {
    const album = await this.prismaService.album.findUnique({
      where: { id },
    });

    if (!album) {
      throw new NotFoundException(`Album with id ${id} not found`);
    }

    return album;
  }

  async updateAlbum(id: number, updateAlbumDto: UpdateAlbumDto) {
    try {
      return this.prismaService.album.update({
        where: { id },
        data: updateAlbumDto,
      });
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async removeAlbum(id: number) {
    try {
      return this.prismaService.album.delete({
        where: { id },
      });
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

 

  async createSong(createSongDto: CreateSongDto) {
    try {
      return await this.prismaService.song.create({
        data: createSongDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException(`Song with title "${createSongDto.title}" already exists`);
      }
      throw new InternalServerErrorException();
    }
  }

  async findAllSongs() {
    return this.prismaService.song.findMany();
  }

  async findOneSong(id: number): Promise<{ id: number; title: string; duration: number; albumId: number; createdAt: Date; updatedAt: Date; } | null> {
    const song = await this.prismaService.song.findUnique({
      where: { id },
    });

    if (!song) {
      throw new NotFoundException(`Song with id ${id} not found`);
    }

    return song;
  }

  async updateSong(id: number, updateSongDto: UpdateSongDto) {
    try {
      return this.prismaService.song.update({
        where: { id },
        data: updateSongDto,
      });
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async removeSong(id: number) {
    try {
      return this.prismaService.song.delete({
        where: { id },
      });
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
