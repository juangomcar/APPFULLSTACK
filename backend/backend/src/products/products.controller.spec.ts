import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CreateArtistDto } from './dto/create-product.dto';
import { UpdateArtistDto } from './dto/update-product.dto';
import {InternalServerErrorException } from '@nestjs/common';

describe('ProductsController (Artists)', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            createArtist: jest.fn(),
            findAllArtists: jest.fn(),
            findOneArtist: jest.fn(),
            updateArtist: jest.fn(),
            removeArtist: jest.fn(),
          },
        },
      ],
    }).compile();

    productsController = module.get<ProductsController>(ProductsController);
    productsService = module.get<ProductsService>(ProductsService);
  });

  describe('create', () => {
    it('should create a new artist', async () => {
      const createArtistDto: CreateArtistDto = { 
        name: 'New Artist', 
        genre: 'Pop' 
      };
  
      const result = { 
        id: 1, 
        ...createArtistDto, 
        createdAt: new Date(),  
        updatedAt: new Date(),  
        genre: createArtistDto.genre || null  
      };
  
      jest.spyOn(productsService, 'createArtist').mockResolvedValue(result);
  
      expect(await productsController.create(createArtistDto)).toBe(result);
      expect(productsService.createArtist).toHaveBeenCalledWith(createArtistDto);
    });
  });
  describe('findAllArtists', () => {
    it('should return an array of artists', async () => {
      const result = [
        {
          id: 1,
          name: 'Artist 1',
          genre: 'Pop',
          createdAt: new Date(), 
          updatedAt: new Date()   
        },
        {
          id: 2,
          name: 'Artist 2',
          genre: 'Rock',
          createdAt: new Date(),  
          updatedAt: new Date()   
        }
      ];
  
      jest.spyOn(productsService, 'findAllArtists').mockResolvedValue(result);
  
      expect(await productsService.findAllArtists()).toBe(result);
    });
  });
  

  describe('findOne', () => {
    it('should return a single artist', async () => {
      const result = { 
        id: 1, 
        name: 'Artist 1', 
        genre: 'Pop', 
        createdAt: new Date(), 
        updatedAt: new Date()   
      };
  
      jest.spyOn(productsService, 'findOneArtist').mockResolvedValue(result);
  
      expect(await productsController.findOne('1')).toBe(result);
      expect(productsService.findOneArtist).toHaveBeenCalledWith(1);
    });
  });
  

  describe('update', () => {
    it('should update an artist', async () => {
      const updateArtistDto: UpdateArtistDto = { 
        name: 'Updated Artist', 
        genre: 'Rock'  
      };
  
      const result = { 
        id: 1, 
        ...updateArtistDto, 
        createdAt: new Date(),  
        updatedAt: new Date(), 
        genre: updateArtistDto.genre || null  
      };
  
      jest.spyOn(productsService, 'updateArtist').mockResolvedValue(result);
  
      expect(await productsController.update('1', updateArtistDto)).toBe(result);
      expect(productsService.updateArtist).toHaveBeenCalledWith(1, updateArtistDto);
    });
  });
  
  
  describe('remove', () => {
    it('should throw InternalServerErrorException if remove fails', async () => {
      jest.spyOn(productsService, 'removeArtist').mockImplementation(() => {
        throw new InternalServerErrorException();
      });
  
      await expect(productsController.remove('1')).rejects.toThrow(InternalServerErrorException);
      expect(productsService.removeArtist).toHaveBeenCalledWith(1);
    });
  });
});
