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
exports.AlbumsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const swagger_1 = require("@nestjs/swagger");
let AlbumsController = class AlbumsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    create(createAlbumDto) {
        return this.productsService.createAlbum(createAlbumDto);
    }
    findAll() {
        return this.productsService.findAllAlbums();
    }
    findOne(id) {
        return this.productsService.findOneAlbum(+id);
    }
    update(id, updateAlbumDto) {
        return this.productsService.updateAlbum(+id, updateAlbumDto);
    }
    remove(id) {
        return this.productsService.removeAlbum(+id);
    }
};
exports.AlbumsController = AlbumsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new album' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The album has been successfully created.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateAlbumDto]),
    __metadata("design:returntype", void 0)
], AlbumsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all albums' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all albums.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlbumsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get album by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the album with the given id.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Album not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlbumsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update album by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The album has been successfully updated.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Album not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateAlbumDto]),
    __metadata("design:returntype", void 0)
], AlbumsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete album by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The album has been successfully deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Album not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlbumsController.prototype, "remove", null);
exports.AlbumsController = AlbumsController = __decorate([
    (0, swagger_1.ApiTags)('albums'),
    (0, common_1.Controller)('api/albums'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], AlbumsController);
//# sourceMappingURL=albums.controller.js.map