import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingServicesService {
  getHello(): string {
    return 'Hello World!';
  }
}
