import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controllers/user.controller';
import { UsersRepositoryService } from '../repositories/users.repository';
import { UserProductEntity } from '../entities/user-product.entity';
import { UserEntity } from '../entities/user.entity';
import { UsersProductsRepositoryService } from '../repositories/user-products.repository';
import { UserProductController } from '../controllers/user-product.controller';
import { SummaryEntity } from '../entities/summary.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, UserProductEntity, SummaryEntity]),
  ],
  providers: [UsersRepositoryService, UsersProductsRepositoryService],
  controllers: [UserController, UserProductController],
})
export class ModelsModule {}
