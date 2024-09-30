import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException, ConflictException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateArtistDto } from './dto/create-product.dto';  
import { UpdateArtistDto } from './dto/update-product.dto';  
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('artists')
@Controller('api/artists')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

@Post()
@ApiOperation({ summary: 'Create a new artist' })
@ApiResponse({ status: 201, description: 'The artist has been successfully created.' })
@ApiResponse({ status: 400, description: 'Invalid input data.' })
async create(@Body() createArtistDto: CreateArtistDto) {
  try {
    return await this.productsService.createArtist(createArtistDto);
  } catch (error) {
    if (error instanceof ConflictException) {
      throw new ConflictException(`Artist with name "${createArtistDto.name}" already exists`);
    }
    throw new InternalServerErrorException('Could not create artist');
  }
}

  @Get()
  @ApiOperation({ summary: 'Get all artists' })
  @ApiResponse({ status: 200, description: 'Return all artists.' })
  findAll() {
    return this.productsService.findAllArtists();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get artist by id' })
  @ApiResponse({ status: 200, description: 'Return the artist with the given id.' })
  @ApiResponse({ status: 404, description: 'Artist not found.' })
  findOne(@Param('id') id: string) {
    return this.productsService.findOneArtist(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update artist by id' })
  @ApiResponse({ status: 200, description: 'The artist has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Artist not found.' })
  update(@Param('id') id: string, @Body() updateArtistDto: UpdateArtistDto) {
    return this.productsService.updateArtist(+id, updateArtistDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete artist by id' })
  @ApiResponse({ status: 200, description: 'The artist has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Artist not found.' })
  async remove(@Param('id') id: string) {
    try {
      return await this.productsService.removeArtist(+id);
    } catch (error) {
      throw new InternalServerErrorException('Could not remove artist');
    }
  }
  
}
