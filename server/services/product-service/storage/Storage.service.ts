import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { S3Client, PutObjectCommand, ObjectCannedACL } from '@aws-sdk/client-s3';
import { extname } from 'path';

@Injectable()
export class ObjectStorageService {
  private s3Client: S3Client;
  private readonly bucketName: string;
  private readonly region: string;

  constructor() {
    const linodeAccessKey = 'BO2MFYSYNZCFUV9U8LTN';
    const linodeSecretKey = 'jaYJNU1qJIV1mIHnjHqmYOY5BfiECurRAiJo0nwV';
    this.region = 'eu-central-1'; // ✅ Fixed region
    const linodeEndpoint = `https://${this.region}.linodeobjects.com`;
    this.bucketName = 'magikworldgifts';

    this.s3Client = new S3Client({
      region: this.region,
      endpoint: linodeEndpoint,
      credentials: {
        accessKeyId: linodeAccessKey,
        secretAccessKey: linodeSecretKey,
      },
      forcePathStyle: true,
    });
  }

  async uploadFile(file: Express.Multer.File, folder: string = ''): Promise<string> {
    const uniqueName =
      Date.now() + '-' + Math.round(Math.random() * 1e9) + extname(file.originalname);
    const key = folder + uniqueName;

    const params = {
      Bucket: this.bucketName,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: ObjectCannedACL.public_read,
    };

    try {
      const command = new PutObjectCommand(params);
      await this.s3Client.send(command);

      // ✅ FIX: Use the actual region string (not config.region)
      const fileUrl = `https://${this.bucketName}.${this.region}.linodeobjects.com/${key}`;
      return fileUrl;
    } catch (error) {
      console.error('Error uploading to Linode Object Storage:', error);
      throw new InternalServerErrorException('Could not upload file to object storage.');
    }
  }
}
