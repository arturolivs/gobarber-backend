import { container } from 'tsyringe';

import uploadConfig from '@config/upload';
import IStorageProvider from '@shared/container/providers/Storage/models/IStorageProvider';
import DiskStorageProvider from '@shared/container/providers/Storage/implementations/DiskStorageProvider';
import S3StorageProvider from '@shared/container/providers/Storage/implementations/S3StorageProvider';

const providers = {
  disk: DiskStorageProvider,
  s3: S3StorageProvider,
};
container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers[uploadConfig.driver],
);
