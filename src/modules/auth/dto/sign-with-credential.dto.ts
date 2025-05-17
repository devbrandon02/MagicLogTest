import { IsEmail, IsEnum, IsString, MinLength } from "class-validator";

export class SignInWithCredentialDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}