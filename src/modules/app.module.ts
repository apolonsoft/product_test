import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { ModelsModule } from './models.module';
@Module({
  imports: [TypeOrmModule.forRoot(), ScheduleModule.forRoot(), ModelsModule],
})
export class AppModule {}
