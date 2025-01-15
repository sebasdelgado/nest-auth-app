import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  //Configuramos para que mi backend solamente reciba las propiedades que yo estipule en las peticiones
  app.useGlobalPipes( 
    new ValidationPipe({ 
    whitelist: true, 
    forbidNonWhitelisted: true, 
    }) 
   );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

