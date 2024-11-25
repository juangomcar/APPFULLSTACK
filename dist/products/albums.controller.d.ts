import { ProductsService } from './products.service';
import { CreateAlbumDto } from './dto/create-product.dto';
import { UpdateAlbumDto } from './dto/update-product.dto';
export declare class AlbumsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createAlbumDto: CreateAlbumDto): Promise<{
        id: number;
        title: string;
        releaseDate: Date | null;
        artistId: number;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        title: string;
        releaseDate: Date | null;
        artistId: number;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        title: string;
        releaseDate: Date | null;
        artistId: number;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateAlbumDto: UpdateAlbumDto): Promise<{
        id: number;
        title: string;
        releaseDate: Date | null;
        artistId: number;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        title: string;
        releaseDate: Date | null;
        artistId: number;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
