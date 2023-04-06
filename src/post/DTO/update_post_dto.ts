import { IsOptional, IsString } from "class-validator";

export class Update_post_dto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  type: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  like: number;

  @IsString()
  @IsOptional()
  aime: number;

  @IsString()
  @IsOptional()
  photos: string;
}