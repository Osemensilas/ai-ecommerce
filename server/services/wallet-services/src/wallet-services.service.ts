import { Injectable } from '@nestjs/common';

@Injectable()
export class WalletServicesService {
  getHello(): string {
    return 'Hello World!';
  }
}
