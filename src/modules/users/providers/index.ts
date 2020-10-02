import { container } from 'tsyringe';

import IHashProvider from '@modules/users/providers/Hash/models/IHashProvider';
import BCriptHashProvider from '@modules/users/providers/Hash/implementations/BCriptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCriptHashProvider);
