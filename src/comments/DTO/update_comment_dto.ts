import { IsOptional, IsString } from "class-validator";

export class Update_comment_dto {
  @IsString()
  @IsOptional()
  object: string;
  @IsString()
  @IsOptional()
  content: string;
}
