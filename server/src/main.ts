import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 

  const config = new DocumentBuilder()
  .setTitle('WorkWolf')
  .setDescription('Документация REST API')
  .setVersion('1.0.0')
  .addTag('petProject')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document)

  await app.listen(3000);
}
bootstrap();
