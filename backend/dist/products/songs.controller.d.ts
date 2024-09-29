import { ProductsService } from './products.service';
import { CreateSongDto } from './dto/create-product.dto';
import { UpdateSongDto } from './dto/update-product.dto';
export declare class SongsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createSongDto: CreateSongDto): Promise<{
        id: number;
        title: string;
        duration: number;
        albumId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        title: string;
        duration: number;
        albumId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        title: string;
        duration: number;
        albumId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateSongDto: UpdateSongDto): Promise<{
        id: number;
        title: string;
        duration: number;
        albumId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        title: string;
        duration: number;
        albumId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
