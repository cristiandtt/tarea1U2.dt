import { Controller, Post, Body, Get, Put, Delete, Param, HttpException, HttpStatus } from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { VuelosDTO } from './dto/vuelos.dto';
import { PasagerosService } from '../pasageros/pasajeros.service';

@Controller('vuelos')
export class VuelosController {

    constructor(private readonly vuelosServicio:VuelosService
        ) {
        
    }
    @Post()
    insertar(@Body() vuelosDTO:VuelosDTO){
        return this.vuelosServicio.insertar(vuelosDTO);
    }
    @Get()
    todos(){
        return this.vuelosServicio.todos();
    }
    @Get(':id')
    uno(@Param('id') id:string){
        return this.vuelosServicio.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id:string, @Body() pasajeroDTO: VuelosDTO){
        return this.vuelosServicio.actualizar(id, pasajeroDTO);
    }
    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.vuelosServicio.eliminar(id);
    }

   
    
}
