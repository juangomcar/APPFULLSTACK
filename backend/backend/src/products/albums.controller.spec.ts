import { Test, TestingModule } from '@nestjs/testing';
import { AlbumsController } from './albums.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: AlbumsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlbumsController],
      providers: [ProductsService],
    }).compile();

    controller = module.get<AlbumsController>(AlbumsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
