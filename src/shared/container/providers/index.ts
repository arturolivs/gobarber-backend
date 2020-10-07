import { container } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/Storage/models/IStorageProvider';
import DiskStorageProvider from '@shared/container/providers/Storage/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
