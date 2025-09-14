import { Injectable } from '@nestjs/common';

@Injectable()
export class DeliveryServicesService {
  getHello(): string {
    return 'Hello World!';
  }
}
