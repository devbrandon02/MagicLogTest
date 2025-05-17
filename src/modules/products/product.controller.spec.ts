import { CreateProductDto } from "./dto/create-product.dto";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";

describe('ProductController', () => {
  let controller: ProductController;
  let productService: jest.Mocked<ProductService>;

  beforeEach(() => {
    productService = {
      createProduct: jest.fn(),
      findAllProducts: jest.fn(),
      findProductByuserId: jest.fn(),
    } as any;

    controller = new ProductController(productService);
  });

  describe('createProduct', () => {
    it('should call productService.createProduct with productData and userId', async () => {
      const productData: CreateProductDto = { name: 'Test', price: 100 } as any;
      const req = { user: { userId: 'user123' } } as any;
      const result = { id: 'prod1', ...productData, sellerId: 'user123' };
      productService.createProduct.mockResolvedValue(result);

      const response = await controller.createProduct(productData, req);

      expect(productService.createProduct).toHaveBeenCalledWith(productData, 'user123');
      expect(response).toBe(result);
    });

    it('should handle missing user in request', async () => {
      const productData: CreateProductDto = { name: 'Test', price: 100 } as any;
      const req = {} as any;
      productService.createProduct.mockResolvedValue('created');

      const response = await controller.createProduct(productData, req);

      expect(productService.createProduct).toHaveBeenCalledWith(productData, undefined);
      expect(response).toBe('created');
    });
  });

  describe('getAllProducts', () => {
    it('should call findAllProducts with sellerId if provided', async () => {
      const sellerId = 'seller123';
      const now = new Date();
      const result = [{
        id: 'prod1',
        name: 'Product 1',
        sku: 'SKU1',
        quantity: 5,
        price: 100,
        sellerId,
        createdAt: now,
        updatedAt: now,
      }];
      productService.findAllProducts.mockResolvedValue(result);

      const response = await controller.getAllProducts(undefined, undefined, undefined, sellerId);

      expect(productService.findAllProducts).toHaveBeenCalledWith({ sellerId });
      expect(response).toBe(result);
    });

    it('should call findAllProducts with search, minPrice, maxPrice', async () => {
      const search = 'test';
      const minPrice = '10';
      const maxPrice = '100';
      const now = new Date();
      const result = [{
        id: 'prod2',
        name: 'Product 2',
        sku: 'SKU2',
        quantity: 10,
        price: 50,
        sellerId: 'seller456',
        createdAt: now,
        updatedAt: now,
      }];
      productService.findAllProducts.mockResolvedValue(result);

      const response = await controller.getAllProducts(search, minPrice, maxPrice, undefined);

      expect(productService.findAllProducts).toHaveBeenCalledWith({
        search,
        minPrice: 10,
        maxPrice: 100,
      });
      expect(response).toBe(result);
    });

    it('should handle undefined minPrice and maxPrice', async () => {
      const now = new Date();
      const result = [{
        id: 'prod3',
        name: 'Product 3',
        sku: 'SKU3',
        quantity: 2,
        price: 20,
        sellerId: 'seller789',
        createdAt: now,
        updatedAt: now,
      }];
      productService.findAllProducts.mockResolvedValue(result);

      const response = await controller.getAllProducts(undefined, undefined, undefined, undefined);

      expect(productService.findAllProducts).toHaveBeenCalledWith({
        search: undefined,
        minPrice: undefined,
        maxPrice: undefined,
      });
      expect(response).toBe(result);
    });
  });

  describe('getProductByUserId', () => {
    it('should call findProductByuserId with userId from request', async () => {
      const req = { user: { userId: 'user456' } } as any;
      const result = [{
        id: 'prod4',
        name: 'Test Product',
        sku: 'SKU123',
        quantity: 10,
        price: 100,
        sellerId: 'user456',
        createdAt: new Date(),
        updatedAt: new Date(),
      }];
      productService.findProductByuserId.mockResolvedValue(result);

      const response = await controller.getProductByUserId(req);

      expect(productService.findProductByuserId).toHaveBeenCalledWith('user456');
      expect(response).toBe(result);
    });

    it('should handle missing user in request', async () => {
      const req = {} as any;
      productService.findProductByuserId.mockResolvedValue([]);

      const response = await controller.getProductByUserId(req);

      expect(productService.findProductByuserId).toHaveBeenCalledWith(undefined);
      expect(response).toEqual([]);
    });
  });
});