import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewServicesService {
  getHello(): string {
    return 'Hello World!';
  }
}
