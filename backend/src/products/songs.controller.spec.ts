import { Test, TestingModule } from '@nestjs/testing';
import { SongsController } from './songs.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: SongsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SongsController],
      providers: [ProductsService],
    }).compile();

    controller = module.get<SongsController>(SongsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
