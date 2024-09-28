import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArtistDto, CreateAlbumDto, CreateSongDto } from './dto/create-product.dto';
import { UpdateArtistDto, UpdateAlbumDto, UpdateSongDto } from './dto/update-product.dto';
export declare class ProductsService {
    private prismaService;
    private readonly logger;
    constructor(prismaService: PrismaService);
    createArtist(createArtistDto: CreateArtistDto): Promise<unknown>;
    findAllArtists(): Promise<{
        id: number;
        name: string;
        genre: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOneArtist(id: number): Promise<{
        id: number;
        name: string;
        genre: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateArtist(id: number, updateArtistDto: UpdateArtistDto): Promise<{
        id: number;
        name: string;
        genre: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeArtist(id: number): Promise<{
        id: number;
        name: string;
        genre: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createAlbum(createAlbumDto: CreateAlbumDto): Promise<{
        id: number;
        title: string;
        releaseDate: Date | null;
        artistId: number;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAllAlbums(): Promise<{
        id: number;
        title: string;
        releaseDate: Date | null;
        artistId: number;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOneAlbum(id: number): Promise<{
        id: number;
        title: string;
        releaseDate: Date | null;
        artistId: number;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateAlbum(id: number, updateAlbumDto: UpdateAlbumDto): Promise<{
        id: number;
        title: string;
        releaseDate: Date | null;
        artistId: number;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeAlbum(id: number): Promise<{
        id: number;
        title: string;
        releaseDate: Date | null;
        artistId: number;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createSong(createSongDto: CreateSongDto): Promise<{
        id: number;
        title: string;
        duration: number;
        albumId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAllSongs(): Promise<{
        id: number;
        title: string;
        duration: number;
        albumId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOneSong(id: number): Promise<{
        id: number;
        title: string;
        duration: number;
        albumId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateSong(id: number, updateSongDto: UpdateSongDto): Promise<{
        id: number;
        title: string;
        duration: number;
        albumId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeSong(id: number): Promise<{
        id: number;
        title: string;
        duration: number;
        albumId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
