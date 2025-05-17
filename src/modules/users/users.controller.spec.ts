import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionContext } from '@nestjs/common';
import { Role } from '@prisma/client';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';


describe('UsersController', () => {
  let controller: UsersController;
  let usersService: Partial<Record<keyof UsersService, jest.Mock>>;

  beforeEach(async () => {
    usersService = {
      create: jest.fn(),
      findById: jest.fn(),
      findByRole: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        { provide: UsersService, useValue: usersService },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({
        canActivate: (context: ExecutionContext) => true,
      })
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  describe('createUser', () => {
    it('should call usersService.create with userData and return result', async () => {
      const userData = { email: 'test@example.com', password: 'pass' };
      const createdUser = { id: 1, ...userData };
      usersService.create!.mockResolvedValue(createdUser);

      const result = await controller.createUser(userData as any);

      expect(usersService.create).toHaveBeenCalledWith(userData);
      expect(result).toEqual(createdUser);
    });
  });

  describe('getUserById', () => {
    it('should call usersService.findById with userId from request and return result', async () => {
      const userId = 42;
      const user = { id: userId, email: 'user@example.com' };
      usersService.findById!.mockResolvedValue(user);

      const req = { user: { userId } };
      const result = await controller.getUserById(req);

      expect(usersService.findById).toHaveBeenCalledWith(userId);
      expect(result).toEqual(user);
    });

    it('should call usersService.findById with undefined if userId is missing', async () => {
      usersService.findById!.mockResolvedValue(null);

      const req = { user: {} };
      const result = await controller.getUserById(req);

      expect(usersService.findById).toHaveBeenCalledWith(undefined);
      expect(result).toBeNull();
    });
  });

  describe('getUserByRole', () => {
    it('should call usersService.findByRole with the given role and return result', async () => {
      const role = 'ADMIN' as Role;
      const users = [{ id: 1, role }, { id: 2, role }];
      usersService.findByRole!.mockResolvedValue(users);

      const result = await controller.getUserByRole(role);

      expect(usersService.findByRole).toHaveBeenCalledWith(role);
      expect(result).toEqual(users);
    });
  });
});