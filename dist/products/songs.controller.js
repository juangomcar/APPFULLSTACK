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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const swagger_1 = require("@nestjs/swagger");
let SongsController = class SongsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    create(createSongDto) {
        return this.productsService.createSong(createSongDto);
    }
    findAll() {
        return this.productsService.findAllSongs();
    }
    findOne(id) {
        return this.productsService.findOneSong(+id);
    }
    update(id, updateSongDto) {
        return this.productsService.updateSong(+id, updateSongDto);
    }
    remove(id) {
        return this.productsService.removeSong(+id);
    }
};
exports.SongsController = SongsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new song' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The song has been successfully created.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateSongDto]),
    __metadata("design:returntype", void 0)
], SongsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all songs' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all songs.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SongsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get song by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the song with the given id.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Song not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SongsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update song by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The song has been successfully updated.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Song not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateSongDto]),
    __metadata("design:returntype", void 0)
], SongsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete song by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The song has been successfully deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Song not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SongsController.prototype, "remove", null);
exports.SongsController = SongsController = __decorate([
    (0, swagger_1.ApiTags)('songs'),
    (0, common_1.Controller)('api/songs'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], SongsController);
//# sourceMappingURL=songs.controller.js.map