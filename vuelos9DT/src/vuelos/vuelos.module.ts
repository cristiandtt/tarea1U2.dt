import { Module } from '@nestjs/common';
import { VuelosController } from './vuelos.controller';
import { VuelosService } from './vuelos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VUELOS } from '../common/models/models';
import { VuelosSchema } from './schema/vuelos.schema';
import { PasagerosModule } from '../pasageros/pasajeros.module';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name:VUELOS.name,
      useFactory:()=>VuelosSchema
      
    }])
  ],
  controllers: [VuelosController],
  providers: [VuelosService]
})
export class VuelosModule {}
