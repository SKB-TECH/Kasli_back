import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class New_post_dto {
  @IsString()
  @IsNotEmpty({
    message: "le champ titre ne doit pas etre vide"
  })
  title: string;

  @IsString()
  @IsNotEmpty({
    message: "le champ type ne doit pas etre vide"
  })
  type: string;

  @IsString()
  @IsNotEmpty({
    message: "le champ description ne doit pas etre vide"
  })
  description: string;

  @IsString()
  @IsOptional()
  like: number;

  @IsString()
  @IsOptional()
  aime: number;

  @IsString()
  @IsNotEmpty({
    message: "pas de post sans image illustrative "
  })
  photos: string;
}
