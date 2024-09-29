import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from '../prisma/prisma.service'; 
import { AlbumsController } from './albums.controller';
import { SongsController } from './songs.controller';

@Module({
  controllers: [ProductsController,AlbumsController,SongsController],
  providers: [ProductsService, PrismaService],  
})
export class ProductsModule {}
