import { IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";

export class Logindto {
  @IsString()
  @IsPhoneNumber()
  username: string;
  @IsString()
  @MaxLength(16)
  @MinLength(8)
  password: string;
}
