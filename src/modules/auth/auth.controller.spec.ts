import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { SignInWithCredentialDto } from "./dto/sign-with-credential.dto";

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(() => {
    authService = {
      login: jest.fn(),
    } as unknown as AuthService;

    authController = new AuthController(authService);
  });

  describe('login', () => {
    it('should call AuthService.login with the correct data and return its result', async () => {
      const dto: SignInWithCredentialDto = {
        email: 'testuser',
        password: 'testpass',
      };
      const expectedResult = { accessToken: 'jwt-token' };
      (authService.login as jest.Mock).mockResolvedValue(expectedResult);

      const result = await authController.login(dto);

      expect(authService.login).toHaveBeenCalledWith(dto);
      expect(result).toBe(expectedResult);
    });
  });
});