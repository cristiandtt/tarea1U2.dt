import { Module } from '@nestjs/common';
import { PasagerosController } from './pasajeros.controller';
import { PasagerosService } from './pasajeros.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PASAJEROS } from '../common/models/models';
import { PasajeroSchema } from './schema/pasajero.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PASAJEROS.name,
        useFactory: () => PasajeroSchema,
      },
    ]),
  ],
  controllers: [PasagerosController],
  providers: [PasagerosService],
})
export class PasagerosModule {}
