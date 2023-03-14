import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { USUARIO } from '../common/models/models';

import * as bcrypt from 'bcrypt';
import { UsuarioDTO } from './dto/usaurio.dto';
import { IUsuario } from 'src/common/interfaces/usuario.interface';
@Injectable()
export class UsuariosService {
    constructor(@InjectModel(USUARIO.name) private readonly usuriomodelo:Model<IUsuario>){}
    
    async crearPassword(password:string):Promise<string>{
    const generar = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, generar);   
    }

    async insertar (usuarioDTO: UsuarioDTO):Promise<IUsuario>{
        const encriptada = await this.crearPassword(usuarioDTO.password);
        const nuevoUsuario = new this.usuriomodelo({...usuarioDTO,password:encriptada});
        return nuevoUsuario.save();
    }
    async todos():Promise<IUsuario[]>{
        return await this.usuriomodelo.find();
    }
    async uno(id:string):Promise<IUsuario>{
        return await this.usuriomodelo.findById(id);
    }
    async actualizar(id: string, usuarioDTO:UsuarioDTO):Promise<IUsuario>{
        const encriptada = await this.crearPassword(usuarioDTO.password);
        const nuevoUsuario = new this.usuriomodelo({...usuarioDTO,password:encriptada});
        return await this.usuriomodelo.findByIdAndUpdate(id, usuarioDTO, {new:true});
    }
    async eliminar(id:string){
        await this.usuriomodelo.findByIdAndDelete(id);
        return {status: HttpStatus.OK, msg:'Se eliminó correctamente'};
    }
}
