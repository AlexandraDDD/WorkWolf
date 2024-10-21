import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Настройка CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Разрешить запросы с этого домена
    methods: 'GET,POST,PUT,DELETE,PATCH', // Разрешить эти методы
    allowedHeaders: 'Content-Type,Authorization', // Разрешить эти заголовки
    credentials: true, // Разрешить отправку учетных данных
  });

  const config = new DocumentBuilder()
    .setTitle('WorkWolf')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('petProject')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);

  await app.listen(5000);
}
bootstrap();
