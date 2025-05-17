import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const USER_AUTH = await this.validateUser(user.email, user.password);

    console.log('USER_AUTH:', USER_AUTH);
    

    if (!USER_AUTH) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (USER_AUTH.role !== 'SELLER') {
      throw new UnauthorizedException('You are not authorized to access this resource');
    }
    
    const payload = { 
      email: USER_AUTH.email, 
      id: USER_AUTH.id, 
      role: USER_AUTH.role, 
      name: USER_AUTH.name 
    };
    return {
      access_token: this.jwtService.sign(payload),
      msg: 'Login successful',
      user: USER_AUTH
    };
  }
}
