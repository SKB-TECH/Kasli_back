import { IsJSON, IsNotEmpty, IsString } from "class-validator";

export class New_favori_dto {
  @IsString()
  @IsNotEmpty()
  subject: string[];

  @IsString()
  @IsJSON()
  details: string[];
}
