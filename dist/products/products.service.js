"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ProductsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let ProductsService = ProductsService_1 = class ProductsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.logger = new common_1.Logger(ProductsService_1.name);
    }
    async createArtist(createArtistDto) {
        this.logger.log(createArtistDto);
        try {
            return await this.prismaService.artist.create({
                data: createArtistDto,
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
                throw new common_1.ConflictException(`Artist with name "${createArtistDto.name}" already exists`);
            }
            return error;
        }
    }
    async findAllArtists() {
        return this.prismaService.artist.findMany();
    }
    async findOneArtist(id) {
        const artist = await this.prismaService.artist.findUnique({
            where: { id },
        });
        if (!artist) {
            throw new common_1.NotFoundException(`Artist with id ${id} not found`);
        }
        return artist;
    }
    async updateArtist(id, updateArtistDto) {
        try {
            return this.prismaService.artist.update({
                where: { id },
                data: updateArtistDto,
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async removeArtist(id) {
        try {
            return this.prismaService.artist.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async createAlbum(createAlbumDto) {
        try {
            return await this.prismaService.album.create({
                data: createAlbumDto,
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
                throw new common_1.ConflictException(`Album with title "${createAlbumDto.title}" already exists`);
            }
            throw new common_1.InternalServerErrorException();
        }
    }
    async findAllAlbums() {
        return this.prismaService.album.findMany();
    }
    async findOneAlbum(id) {
        const album = await this.prismaService.album.findUnique({
            where: { id },
        });
        if (!album) {
            throw new common_1.NotFoundException(`Album with id ${id} not found`);
        }
        return album;
    }
    async updateAlbum(id, updateAlbumDto) {
        try {
            return this.prismaService.album.update({
                where: { id },
                data: updateAlbumDto,
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async removeAlbum(id) {
        try {
            return this.prismaService.album.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async createSong(createSongDto) {
        try {
            return await this.prismaService.song.create({
                data: createSongDto,
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
                throw new common_1.ConflictException(`Song with title "${createSongDto.title}" already exists`);
            }
            throw new common_1.InternalServerErrorException();
        }
    }
    async findAllSongs() {
        return this.prismaService.song.findMany();
    }
    async findOneSong(id) {
        const song = await this.prismaService.song.findUnique({
            where: { id },
        });
        if (!song) {
            throw new common_1.NotFoundException(`Song with id ${id} not found`);
        }
        return song;
    }
    async updateSong(id, updateSongDto) {
        try {
            return this.prismaService.song.update({
                where: { id },
                data: updateSongDto,
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async removeSong(id) {
        try {
            return this.prismaService.song.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = ProductsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map