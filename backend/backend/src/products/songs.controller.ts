import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateSongDto } from './dto/create-product.dto';  
import { UpdateSongDto} from './dto/update-product.dto';  
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('songs')
@Controller('api/songs')
export class SongsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new song' })
  @ApiResponse({ status: 201, description: 'The song has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  create(@Body() createSongDto: CreateSongDto) {
    return this.productsService.createSong(createSongDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all songs' })
  @ApiResponse({ status: 200, description: 'Return all songs.' })
  findAll() {
    return this.productsService.findAllSongs();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get song by id' })
  @ApiResponse({ status: 200, description: 'Return the song with the given id.' })
  @ApiResponse({ status: 404, description: 'Song not found.' })
  async findOne(@Param('id') id: string) {
    const song = await this.productsService.findOneSong(+id);
  
    if (!song) {
      throw new NotFoundException(`Song with id ${id} not found`);
    }
  
    return song;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update song by id' })
  @ApiResponse({ status: 200, description: 'The song has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Song not found.' })
  update(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
    return this.productsService.updateSong(+id, updateSongDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete song by id' })
  @ApiResponse({ status: 200, description: 'The song has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Song not found.' })
  async remove(@Param('id') id: string) {
    try {
      return await this.productsService.removeSong(+id);
    } catch (error) {
      throw new InternalServerErrorException('Could not remove song');
    }
  }
  
}
