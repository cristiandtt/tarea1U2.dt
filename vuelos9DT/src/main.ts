import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TodasExcepciones } from './common/filtros/http-exception.filter';
import { TiempoSalidaInterceptor } from './common/interceptores/tiemposalida.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new TodasExcepciones());
  app.useGlobalInterceptors(new TiempoSalidaInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
