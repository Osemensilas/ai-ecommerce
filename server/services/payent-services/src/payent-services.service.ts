import { Injectable } from '@nestjs/common';

@Injectable()
export class PayentServicesService {
  getHello(): string {
    return 'Hello World!';
  }
}
