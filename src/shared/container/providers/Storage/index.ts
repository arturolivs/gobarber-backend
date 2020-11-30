import { container } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/Storage/models/IStorageProvider';
import DiskStorageProvider from '@shared/container/providers/Storage/implementations/DiskStorageProvider';

const providers = {
  disk: DiskStorageProvider,
};
container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers.disk,
);
