import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { VUELOS } from '../common/models/models';
import { Model } from 'mongoose';

import { VuelosDTO } from './dto/vuelos.dto';
import { IVuelo } from 'src/common/interfaces/vuelo.interface';

@Injectable()
export class VuelosService {
    constructor(@InjectModel(VUELOS.name) private readonly vuelosModelos:Model<IVuelo>){}

    async insertar(vueloDto:VuelosDTO):Promise<IVuelo>{
        const nuevoVuelo = new this.vuelosModelos(vueloDto);
        return await nuevoVuelo.save()
    }

    async todos():Promise<IVuelo[]>{
        return await this.vuelosModelos.find();
    }

    async uno(id:string):Promise<IVuelo>{
        return await this.vuelosModelos.findById(id);
    }

    async actualizar(id:string, vueloDT:VuelosDTO):Promise<IVuelo>{
    return await this.vuelosModelos.findByIdAndUpdate(id,vueloDT,{new:true});    
    }

    async eliminar(id:string){
        await this.vuelosModelos.findByIdAndDelete(id);
        return {status:HttpStatus.OK, msg:'Eliminado'}
    }

    async insertarPasajero(vueloId:string, pasajeroId:string):Promise<IVuelo>
    {
        return await this.vuelosModelos.findByIdAndUpdate(vueloId,{
            $addToSet:{pasajeros:pasajeroId}
        },{new: true}).populate('pasajeros')
    }
}
