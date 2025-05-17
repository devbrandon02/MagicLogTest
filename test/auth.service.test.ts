import { AuthService } from '../src/modules/auth/auth.service';
import { UsersService } from '../src/modules/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

jest.mock('../users/users.service');
jest.mock('@nestjs/jwt');
jest.mock('bcrypt');

describe('AuthService - validateUser', () => {
  let authService: AuthService;
  let usersService: jest.Mocked<UsersService>;

  beforeEach(() => {
    const prismaMock = {} as any;
    usersService = new UsersService(prismaMock) as jest.Mocked<UsersService>;
    authService = new AuthService(usersService, new JwtService() as any);
    jest.clearAllMocks();
  });

  it('should return user object without password if credentials are valid', async () => {
    const mockUser = {
      id: 1,
      email: 'test@example.com',
      password: 'hashedpassword',
      name: 'Test User',
      role: 'SELLER'
    };
    usersService.findByEmail = jest.fn().mockResolvedValue(mockUser);
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);

    const result = await authService.validateUser('test@example.com', 'password123');
    expect(usersService.findByEmail).toHaveBeenCalledWith('test@example.com');
    expect(bcrypt.compare).toHaveBeenCalledWith('password123', mockUser.password);
    expect(result).toEqual({
      id: 1,
      email: 'test@example.com',
      name: 'Test User',
      role: 'SELLER'
    });
    expect(result).not.toHaveProperty('password');
  });

  it('should return null if user is not found', async () => {
    usersService.findByEmail = jest.fn().mockResolvedValue(null);

    const result = await authService.validateUser('notfound@example.com', 'password123');
    expect(usersService.findByEmail).toHaveBeenCalledWith('notfound@example.com');
    expect(result).toBeNull();
  });

  it('should return null if password does not match', async () => {
    const mockUser = {
      id: 2,
      email: 'test2@example.com',
      password: 'hashedpassword2',
      name: 'Test User 2',
      role: 'SELLER'
    };
    usersService.findByEmail = jest.fn().mockResolvedValue(mockUser);
    (bcrypt.compare as jest.Mock).mockResolvedValue(false);

    const result = await authService.validateUser('test2@example.com', 'wrongpassword');
    expect(usersService.findByEmail).toHaveBeenCalledWith('test2@example.com');
    expect(bcrypt.compare).toHaveBeenCalledWith('wrongpassword', mockUser.password);
    expect(result).toBeNull();
  });
});