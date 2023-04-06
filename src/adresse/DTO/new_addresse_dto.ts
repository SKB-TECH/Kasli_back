import { IsNotEmpty, IsString } from 'class-validator';

export class New_addresse_dto {
  @IsString()
  @IsNotEmpty({
    message: 'le champ pays  ne doit pas etre vide !!',
  })
  pays: string;

  @IsString()
  @IsNotEmpty({
    message: 'le champ porvince  ne doit pas etre vide !!',
  })
  province: string;

  @IsString()
  @IsNotEmpty({
    message: 'le champ ville  ne doit pas etre vide !!',
  })
  ville: string;

  @IsString()
  @IsNotEmpty({
    message: 'le champ commune  ne doit pas etre vide !!',
  })
  commune: string;

  @IsString()
  @IsNotEmpty({
    message: 'le champ quartier  ne doit pas etre vide !!',
  })
  quartier: string;

  @IsString()
  @IsNotEmpty({
    message: 'le champ avenue  ne doit pas etre vide !!',
  })
  avenu: string;

  @IsString()
  @IsNotEmpty({
    message: 'le champ numero  ne doit pas etre vide !!',
  })
  num: string;
}
