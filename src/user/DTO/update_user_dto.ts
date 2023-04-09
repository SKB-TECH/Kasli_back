import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class Update_user_dto {
  @IsNotEmpty({
    message: "le champ firstname ne doit pas etre vide !"
  })
  @IsString()
  firstname: string;

  @IsOptional()
  @IsString()
  lastname: string;

  @IsOptional()
  @IsString()
  sexe: string;

  @IsOptional()
  @IsString()
  telephone: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @MaxLength(16)
  @MinLength(8)
  password: string;
  @IsNotEmpty({
    message: "le champ salt ne doit pas etre vide !"
  })
  @IsString()
  @IsOptional()
  type: string;
  @IsOptional()
  salt: string;
}
