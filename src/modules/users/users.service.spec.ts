import { PrismaService } from '../../database/prisma.service';
import { UsersService } from './users.service';

describe('UsersService - findAll', () => {
  let usersService: UsersService;
  let prisma: PrismaService;

  beforeEach(() => {
    prisma = {
      user: {
        findMany: jest.fn(),
      },
    } as any;
    usersService = new UsersService(prisma);
  });

  it('should return an array of users', async () => {
    const mockUsers = [
      { id: '1', name: 'Alice', email: 'alice@example.com', password: 'hashed', role: 'SELLER' },
      { id: '2', name: 'Bob', email: 'bob@example.com', password: 'hashed', role: 'ADMIN' },
    ];
    (prisma.user.findMany as jest.Mock).mockResolvedValue(mockUsers);

    const result = await usersService.findAll();

    expect(prisma.user.findMany).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockUsers);
  });

  it('should return an empty array if no users exist', async () => {
    (prisma.user.findMany as jest.Mock).mockResolvedValue([]);

    const result = await usersService.findAll();

    expect(prisma.user.findMany).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
  });

  it('should propagate errors thrown by prisma', async () => {
    (prisma.user.findMany as jest.Mock).mockRejectedValue(new Error('DB error'));

    await expect(usersService.findAll()).rejects.toThrow('DB error');
    expect(prisma.user.findMany).toHaveBeenCalledTimes(1);
  });
});