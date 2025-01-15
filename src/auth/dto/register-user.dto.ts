import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterUserDto {

    //Agregamos las validaciones de tipo para nuestras propiedades
    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @MinLength(6)
    password: string;
}