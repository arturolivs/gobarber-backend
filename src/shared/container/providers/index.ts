import { container } from 'tsyringe';
import mailConfig from '@config/mail';

import IStorageProvider from '@shared/container/providers/Storage/models/IStorageProvider';
import DiskStorageProvider from '@shared/container/providers/Storage/implementations/DiskStorageProvider';

import IMailProvider from '@shared/container/providers/Mail/models/IMailProvider';
import EtherealMailProvider from '@shared/container/providers/Mail/implementations/EtherealMailProvider';
import SESMailProvider from '@shared/container/providers/Mail/implementations/SESMailProvider';

import IMailTemplateProvider from '@shared/container/providers/MailTemplate/models/IMailTemplateProvider';
import HandlebarsMailTemplateProvider from '@shared/container/providers/MailTemplate/implementations/HandlebarsMailTemplateProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandlebarsMailTemplateProvider,
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  mailConfig.driver === 'ethereal'
    ? container.resolve(EtherealMailProvider)
    : container.resolve(SESMailProvider),
);
