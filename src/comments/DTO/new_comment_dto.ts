import { IsNotEmpty, IsString } from "class-validator";

export class New_comment_dto {
  @IsString()
  @IsNotEmpty({
    message: "le champs object ne doit pas etre vide"
  })
  object: string;

  @IsString()
  @IsNotEmpty({
    message: "le champs contenu ne doit pas etre vide"
  })
  content: string;
}
