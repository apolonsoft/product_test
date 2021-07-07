import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { UsersRepositoryService } from '../repositories/users.repository';

@Controller('/users')
export class UserController {
  constructor(
    private readonly usersRepositoryService: UsersRepositoryService,
  ) {}

  @Get('/')
  async findAll() {
    return await this.usersRepositoryService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    const user = await this.usersRepositoryService.findById(id);
    if (!user) {
      throw new NotFoundException('User Not Fount');
    }
    return user;
  }
}
