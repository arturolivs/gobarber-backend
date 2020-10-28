import { container } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/Storage/models/IStorageProvider';
import DiskStorageProvider from '@shared/container/providers/Storage/implementations/DiskStorageProvider';

import IMailProvider from '@shared/container/providers/Mail/models/IMailProvider';
import EtherealMailProvider from '@shared/container/providers/Mail/implementations/EtherealMailProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
container.registerInstance<IMailProvider>(
  'MailProvider',
  new EtherealMailProvider(),
);
