import { IsOptional, IsString } from "class-validator";

export class Update_favori_dto {
  @IsString()
  @IsOptional()
  subject: string;
  @IsString()
  @IsOptional()
  critere: string;
}
