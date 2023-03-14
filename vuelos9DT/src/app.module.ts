import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PasagerosModule } from './pasageros/pasajeros.module';
import { VuelosModule } from './vuelos/vuelos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:['.env.development'],
      isGlobal:true
    }),MongooseModule.forRoot(process.env.URI_MONGO),  
    UsuariosModule, PasagerosModule, VuelosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
