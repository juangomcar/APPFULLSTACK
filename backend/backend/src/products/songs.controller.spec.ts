import { Test, TestingModule } from '@nestjs/testing';
import { SongsController } from './songs.controller';
import { ProductsService } from './products.service';
import { CreateSongDto } from './dto/create-product.dto';
import { UpdateSongDto } from './dto/update-product.dto';
import { InternalServerErrorException, NotFoundException } from '@nestjs/common';

describe('SongsController', () => {
  let songsController: SongsController;
  let productsService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SongsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            createSong: jest.fn(),
            findAllSongs: jest.fn(),
            findOneSong: jest.fn(),
            updateSong: jest.fn(),
            removeSong: jest.fn(),
          },
        },
      ],
    }).compile();

    songsController = module.get<SongsController>(SongsController);
    productsService = module.get<ProductsService>(ProductsService);
  });

  describe('create', () => {
    it('should create a new song', async () => {
      const createSongDto: CreateSongDto = { 
        title: 'New Song', 
        duration: 180, 
        albumId: 1, 
        artistId: 1 
      };  
      const result = { 
        id: 1, 
        title: 'New Song', 
        duration: 180, 
        albumId: 1, 
        artistId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      };
  
      jest.spyOn(productsService, 'createSong').mockResolvedValue(result);
  
      expect(await songsController.create(createSongDto)).toBe(result);
      expect(productsService.createSong).toHaveBeenCalledWith(createSongDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of songs', async () => {
      const result = [
        { 
          id: 1, 
          title: 'Song 1', 
          artistId: 1, 
          albumId: 1, 
          duration: 180,
          createdAt: new Date(),  
          updatedAt: new Date()   
        }
      ];
  
      jest.spyOn(productsService, 'findAllSongs').mockResolvedValue(result);
  
      expect(await songsController.findAll()).toBe(result);
      expect(productsService.findAllSongs).toHaveBeenCalled();
    });
  });
  

  describe('findOne', () => {
    it('should return a single song', async () => {
      const result = { 
        id: 1, 
        title: 'Song 1', 
        duration: 180, 
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      };
  
      jest.spyOn(productsService, 'findOneSong').mockResolvedValue(result);
  
      expect(await songsController.findOne('1')).toBe(result);
      expect(productsService.findOneSong).toHaveBeenCalledWith(1);
    });
  
    it('should throw a NotFoundException if song not found', async () => {
      jest.spyOn(productsService, 'findOneSong').mockResolvedValue(null);
  
      await expect(songsController.findOne('2')).rejects.toThrow(NotFoundException);
      expect(productsService.findOneSong).toHaveBeenCalledWith(2);
    });
  });
  

describe('update', () => {
  it('should update a song', async () => {
    const updateSongDto: UpdateSongDto = { 
      title: 'Updated Song', 
      duration: 200 
    };

    const result = { 
      id: 1, 
      title: 'Updated Song', 
      duration: 200, 
      albumId: 1, 
      artistId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    jest.spyOn(productsService, 'updateSong').mockResolvedValue(result);

    expect(await songsController.update('1', updateSongDto)).toBe(result);
    expect(productsService.updateSong).toHaveBeenCalledWith(1, updateSongDto);
  });
});

describe('remove', () => {
  it('should throw InternalServerErrorException if remove fails', async () => {
    jest.spyOn(productsService, 'removeSong').mockImplementation(() => {
      throw new InternalServerErrorException('Internal server error');
    });

    await expect(songsController.remove('1')).rejects.toThrow(InternalServerErrorException);
  });
});


    it('should throw InternalServerErrorException if remove fails', async () => {
      jest.spyOn(productsService, 'removeSong').mockImplementation(() => {
        throw new Error('Internal server error');
      });

      await expect(songsController.remove('1')).rejects.toThrow(Error);
      expect(productsService.removeSong).toHaveBeenCalledWith(1);
    });
  });
