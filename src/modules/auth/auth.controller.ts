import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { AuthService } from "./auth.service";
import { SignInWithCredentialDto } from "./dto/sign-with-credential.dto";

@Controller('auth')
export class AuthController {

  constructor(private readonly _authService: AuthService) { }

  @Post('sign-with-credentials')
  login(@Body() userData: SignInWithCredentialDto) {
    return this._authService.login(userData);
  }
}