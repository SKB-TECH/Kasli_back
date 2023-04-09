import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UserDto {
  @IsNotEmpty({
    message: "le champ firstname ne doit pas etre vide !"
  })
  @IsString()
  firstname: string;

  @IsNotEmpty({
    message: "le champ lastname ne doit pas etre vide !"
  })
  @IsString()
  lastname: string;

  @IsNotEmpty({
    message: "le champ sexe ne doit pas etre vide !"
  })
  @IsString()
  sexe: string;

  @IsNotEmpty({
    message: "le champ telephone ne doit pas etre vide !"
  })
  @IsString()
  telephone: string;

  @IsNotEmpty({
    message: "le champ email ne doit pas etre vide !"
  })
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty({
    message: "le champ password ne doit pas etre vide !!"
  })
  @IsString()
  @MaxLength(16)
  @MinLength(8)
  password: string;
  @IsNotEmpty({
    message: "le champ salt ne doit pas etre vide !"
  })
  @IsNotEmpty({
    message: "le champ salt ne doit pas etre vide !"
  })
  type: string;
  @IsNotEmpty({
    message: "le champ salt ne doit pas etre vide !"
  })
  salt: string;
}
