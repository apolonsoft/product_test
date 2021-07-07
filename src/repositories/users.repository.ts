import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entities/user.entity';

@Injectable()
export class UsersRepositoryService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async findById(id: number): Promise<UserEntity> {
    return await this.usersRepository.findOne(id, {
      relations: ['userProducts'],
    });
  }
}
