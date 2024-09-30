import { Test, TestingModule } from '@nestjs/testing';
import { AlbumsController } from './albums.controller';
import { ProductsService } from './products.service';
import { CreateAlbumDto } from './dto/create-product.dto';
import { UpdateAlbumDto } from './dto/update-product.dto';

describe('AlbumsController', () => {
  let albumsController: AlbumsController;
  let productsService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlbumsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            createAlbum: jest.fn(),
            findAllAlbums: jest.fn(),
            findOneAlbum: jest.fn(),
            updateAlbum: jest.fn(),
            removeAlbum: jest.fn(),
          },
        },
      ],
    }).compile();

    albumsController = module.get<AlbumsController>(AlbumsController);
    productsService = module.get<ProductsService>(ProductsService);
  });

  describe('create', () => {
    it('should create a new album', async () => {
      const createAlbumDto: CreateAlbumDto = { title: 'New Album', artistId: 1, releaseDate: new Date() }; 
      const result = { 
        id: 1, 
        title: 'New Album', 
        artistId: 1, 
        releaseDate: new Date(), 
        imageUrl: '', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      };
      jest.spyOn(productsService, 'createAlbum').mockResolvedValue(result);

      expect(await albumsController.create(createAlbumDto)).toBe(result);
      expect(productsService.createAlbum).toHaveBeenCalledWith(createAlbumDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of albums', async () => {
      const result = [{
        id: 1, 
        title: 'Album 1', 
        artistId: 1, 
        releaseDate: new Date(), 
        imageUrl: '', 
        createdAt: new Date(), 
        updatedAt: new Date()
      }];
      jest.spyOn(productsService, 'findAllAlbums').mockResolvedValue(result);

      expect(await albumsController.findAll()).toBe(result);
      expect(productsService.findAllAlbums).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single album', async () => {
      const result = {
        id: 1, 
        title: 'Album 1', 
        artistId: 1, 
        releaseDate: new Date(), 
        imageUrl: '', 
        createdAt: new Date(), 
        updatedAt: new Date()
      };
      jest.spyOn(productsService, 'findOneAlbum').mockResolvedValue(result);

      expect(await albumsController.findOne('1')).toBe(result);
      expect(productsService.findOneAlbum).toHaveBeenCalledWith(1);
    });

    it('should throw a 404 error if album not found', async () => {
      jest.spyOn(productsService, 'findOneAlbum').mockResolvedValue(null); 
  
      await expect(albumsController.findOne('2')).rejects.toThrow(); 
    });
  });

  describe('update', () => {
    it('should update an album', async () => {
      const updateAlbumDto: UpdateAlbumDto = { 
        title: 'Updated Album',  
        releaseDate: new Date(),  
        artistId: 1 
      }; 
  
      const result = {
        id: 1,
        title: 'Updated Album',
        releaseDate: new Date(),
        artistId: 1,
        imageUrl: '',  
        createdAt: new Date(),
        updatedAt: new Date()
      };
  
      jest.spyOn(productsService, 'updateAlbum').mockResolvedValue(result);
  
      expect(await albumsController.update('1', updateAlbumDto)).toBe(result);
      expect(productsService.updateAlbum).toHaveBeenCalledWith(1, updateAlbumDto);
    });
  });
  

  describe('remove', () => {
    it('should remove an album', async () => {
      const result = { 
        id: 1, 
        title: 'Album 1', 
        artistId: 1, 
        releaseDate: new Date(), 
        imageUrl: '', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      };
      jest.spyOn(productsService, 'removeAlbum').mockResolvedValue(result);

      expect(await albumsController.remove('1')).toBe(result);
      expect(productsService.removeAlbum).toHaveBeenCalledWith(1);
    });
  });
});
