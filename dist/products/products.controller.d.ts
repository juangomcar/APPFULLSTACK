import { ProductsService } from './products.service';
import { CreateArtistDto } from './dto/create-product.dto';
import { UpdateArtistDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createArtistDto: CreateArtistDto): Promise<unknown>;
    findAll(): Promise<{
        id: number;
        name: string;
        genre: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        genre: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateArtistDto: UpdateArtistDto): Promise<{
        id: number;
        name: string;
        genre: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        genre: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
