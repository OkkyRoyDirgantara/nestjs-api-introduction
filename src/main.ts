import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'verbose', 'log'],
    cors: true,
  });

  const config = new DocumentBuilder()
      .setTitle('CRUD example')
      .setDescription('This API for test')
      .setVersion('9.9.9')
      .addTag('users')
      .build();
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document);

  await app.listen(8080);
}
bootstrap();
