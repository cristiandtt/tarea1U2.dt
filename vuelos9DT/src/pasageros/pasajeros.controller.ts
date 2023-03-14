import { Body, Controller, Delete, Get, Param, Post,Put } from '@nestjs/common';
import { PasagerosService } from './pasajeros.service';
import { PasajerosDTO } from './dto/pasajeros.dto';

@Controller('api/v1/pasageros')
export class PasagerosController {
    constructor(private readonly pasagerosServicio:PasagerosService){}

    @Post()
    insertar(@Body() pasajeroDTO:PasajerosDTO){
        return this.pasagerosServicio.insertar(pasajeroDTO);
    }

    @Get()
    todos(){
        return this.pasagerosServicio.todos();
    }
    @Get(':id')
    uno(@Param('id') id:string){
        return this.pasagerosServicio.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id:string, @Body() pasajeroDTO: PasajerosDTO){
        return this.pasagerosServicio.actualizar(id, pasajeroDTO);
    }
    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.pasagerosServicio.eliminar(id);
    }

    
}
