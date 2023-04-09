import { IsOptional, IsString } from "class-validator";

export class Update_notice {
  @IsString()
  @IsOptional()
  objet: string;
  @IsString()
  @IsOptional()
  contenu: string;
}