import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class VuelosDTO{
    @IsNotEmpty()
    @IsString()
    readonly piloto:string;
    @IsNotEmpty()
    @IsString()
    readonly avion:string;
    @IsNotEmpty()
    @IsString()
    readonly destino:string;
    @IsNotEmpty()
    @Type(()=>Date)
    @IsDate()
    readonly fecha;
}