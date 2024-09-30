import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateAlbumDto } from './dto/create-product.dto';  
import { UpdateAlbumDto} from './dto/update-product.dto';  
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NotFoundException } from '@nestjs/common';

@ApiTags('albums')
@Controller('api/albums')
export class AlbumsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new album' })
  @ApiResponse({ status: 201, description: 'The album has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  create(@Body() createAlbumDto: CreateAlbumDto) {
    return this.productsService.createAlbum(createAlbumDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all albums' })
  @ApiResponse({ status: 200, description: 'Return all albums.' })
  findAll() {
    return this.productsService.findAllAlbums();
  }

  @Get(':id')
@ApiOperation({ summary: 'Get album by id' })
@ApiResponse({ status: 200, description: 'Return the album with the given id.' })
@ApiResponse({ status: 404, description: 'Album not found.' })
async findOne(@Param('id') id: string) {
  const album = await this.productsService.findOneAlbum(+id);  
  if (!album) {
    throw new NotFoundException('Album not found');
  }

  return album;
}

  @Patch(':id')
  @ApiOperation({ summary: 'Update album by id' })
  @ApiResponse({ status: 200, description: 'The album has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Album not found.' })
  update(@Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto) {
    return this.productsService.updateAlbum(+id, updateAlbumDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete album by id' })
  @ApiResponse({ status: 200, description: 'The album has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Album not found.' })
  remove(@Param('id') id: string) {
    return this.productsService.removeAlbum(+id);
  }
}

