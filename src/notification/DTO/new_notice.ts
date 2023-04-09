import { IsNotEmpty, IsString } from "class-validator";

export class New_notice {
  @IsString()
  @IsNotEmpty({
    message: "pas de champ vide"
  })
  objet: string;

  @IsString()
  @IsNotEmpty({
    message: "pas de champ vide"
  })
  contenu: string;
}