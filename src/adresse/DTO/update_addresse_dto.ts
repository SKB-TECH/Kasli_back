import { IsOptional, IsString } from 'class-validator';

export class Update_addresse_dto {
  @IsString()
  @IsOptional()
  pays: string;

  @IsString()
  @IsOptional()
  province: string;

  @IsString()
  @IsOptional()
  ville: string;

  @IsString()
  @IsOptional()
  commune: string;

  @IsString()
  @IsOptional()
  quartier: string;

  @IsString()
  @IsOptional()
  avenu: string;

  @IsString()
  @IsOptional()
  num: string;
}
