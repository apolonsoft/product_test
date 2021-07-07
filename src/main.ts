import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('Test');
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT, process.env.HOST, () =>
    logger.log(`Listening on ${process.env.HOST}:${process.env.PORT}`),
  );
}
bootstrap();
