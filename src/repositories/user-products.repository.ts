import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { UserProductEntity } from '../entities/user-product.entity';
import { UserProductDto } from '../dtos/user-product.dto';
import { DeleteUserProductDto } from '../dtos/delete-user-product.dto';

@Injectable()
export class UsersProductsRepositoryService {
  private readonly logger = new Logger(UsersProductsRepositoryService.name);

  constructor(
    @InjectRepository(UserProductEntity)
    private userProductsRepository: Repository<UserProductEntity>,
  ) {}

  async findAll(): Promise<UserProductEntity[]> {
    return await this.userProductsRepository.find();
  }

  async findByUserId(userId: number) {
    const result = await this.userProductsRepository.find({
      select: ['asin', 'title'],
      where: {
        userId,
      },
      relations: ['summaries'],
    });

    const final = result.map((item) => {
      const { asin, title } = item;
      const organic = { label: 'ORGANIC', data: [] };
      const ads = { label: 'ADS', data: [] };
      return {
        asin,
        title,
        graphDay: [organic, ads],
      };
    });

    return final;
  }

  async create(input: UserProductDto): Promise<UserProductEntity> {
    try {
      const userProduct = this.userProductsRepository.create(input);
      return await this.userProductsRepository.manager.save(userProduct);
    } catch (error) {
      this.logger.error('UserProduct Create/Update Error');
      throw new InternalServerErrorException(error);
    }
  }

  async delete(input: DeleteUserProductDto): Promise<DeleteResult> {
    const { userId, asin } = input;
    try {
      return await this.userProductsRepository.delete({
        userId,
        asin,
      });
    } catch (error) {
      this.logger.error('UserProduct Delete Error');
      throw new InternalServerErrorException(error);
    }
  }
}
