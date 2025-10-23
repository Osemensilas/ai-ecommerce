import { Test, TestingModule } from '@nestjs/testing';
// import { ProductServiceController } from './product-service.controller';
import { ProductController } from './product-service.controller';
import { ProductService } from './product-service.service'; 
// import { ProductServiceService } from './product-service.service';

describe('ProductServiceController', () => {
  let productServiceController: ProductController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    productServiceController = app.get<ProductController>(ProductController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(productServiceController.getHello()).toBe('Hello World!');
    });
  });
});
