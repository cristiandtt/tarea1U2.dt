import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PasajerosDTO } from './dto/pasajeros.dto';
import { PASAJEROS } from '../common/models/models';
import { Model } from 'mongoose';
import { IPasajero } from 'src/common/interfaces/pasajero.interfce';

@Injectable()
export class PasagerosService {
  constructor(
    @InjectModel(PASAJEROS.name)
    private readonly pasajeroModelo: Model<IPasajero>,
  ) {}
  async insertar(pasajeroDTO: PasajerosDTO): Promise<IPasajero> {
    const nuevoPasajero = new this.pasajeroModelo(pasajeroDTO);
    return await nuevoPasajero.save();
  }

  async todos():Promise<IPasajero[]>{
    return await this.pasajeroModelo.find();
  }

  async uno(id:string):Promise<IPasajero>{
    return await this.pasajeroModelo.findById(id);
  }

  async actualizar(id:string, pasajeroDTO: PasajerosDTO):Promise<IPasajero>{
    return await this.pasajeroModelo.findByIdAndUpdate(id, pasajeroDTO,{new:true});
  }

  async eliminar(id:string){
    await this.pasajeroModelo.findByIdAndDelete(id);
    return {status:HttpStatus.OK, msg:"Eliminado"};
  }

}
