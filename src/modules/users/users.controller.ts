import { Body, Controller, Get, Param, Post, Req, UseGuards, Request } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { UsersService } from "./users.service";
import { Role } from "@prisma/client";

@Controller('user')
export class UsersController {

  constructor(
    private readonly _usersService: UsersService,
  ) { }

  @Post('create')
  async createUser(@Body() userData: CreateUserDto) {
    return this._usersService.create(userData);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getUserById(@Req() req: any) {
    const userId = req.user?.userId;    
    return this._usersService.findById(userId);
  }

  @Get('byRole/:role')
  @UseGuards(JwtAuthGuard)
  async getUserByRole(@Param('role') role: Role) {
    return this._usersService.findByRole(role);
  }
}