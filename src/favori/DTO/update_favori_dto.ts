import { IsOptional, IsString } from "class-validator";
import { mainson } from "../interfaces/maison_interface";

export class Update_favori_dto {
  @IsString()
  @IsOptional()
  subject: string;
  @IsString()
  @IsOptional()
  criteres: mainson;
}
