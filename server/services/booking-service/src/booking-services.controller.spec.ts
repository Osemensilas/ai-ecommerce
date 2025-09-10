import { Test, TestingModule } from '@nestjs/testing';
import { BookingServicesController } from './booking-services.controller';
import { BookingServicesService } from './booking-services.service';

describe('BookingServicesController', () => {
  let bookingServicesController: BookingServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookingServicesController],
      providers: [BookingServicesService],
    }).compile();

    bookingServicesController = app.get<BookingServicesController>(BookingServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bookingServicesController.getHello()).toBe('Hello World!');
    });
  });
});
