import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DeleteUserProductDto } from '../dtos/delete-user-product.dto';
import { UserProductDto } from '../dtos/user-product.dto';
import { UsersProductsRepositoryService } from '../repositories/user-products.repository';

@Controller('/user-product')
export class UserProductController {
  constructor(
    private readonly userProductsRepositoryService: UsersProductsRepositoryService,
  ) {}

  @Get('/')
  async findAll() {
    return await this.userProductsRepositoryService.findAll();
  }

  @Get('/:user_id')
  async findByUserId(@Param('user_id') userId: number) {
    return await this.userProductsRepositoryService.findByUserId(userId);
  }

  @Post()
  async createOrUpdate(@Body() userProductDto: UserProductDto) {
    return await this.userProductsRepositoryService.create(userProductDto);
  }

  @Post('/delete')
  async delete(@Body() deleteUserProductDto: DeleteUserProductDto) {
    return await this.userProductsRepositoryService.delete(deleteUserProductDto);
  }
}
