import { Module } from '@nestjs/common';
import { ObjectStorageService } from './Storage.service';

@Module({
  providers: [ObjectStorageService],
  exports: [ObjectStorageService], 
})
export class StorageModule {}
