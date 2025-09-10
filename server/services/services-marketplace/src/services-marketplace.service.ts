import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicesMarketplaceService {
  getHello(): string {
    return 'Hello World!';
  }
}
