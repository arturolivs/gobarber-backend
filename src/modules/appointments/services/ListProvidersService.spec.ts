import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let fakeCacheProvider: FakeCacheProvider;
let listProviders: ListProvidersService;

describe('List Providers', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();

    listProviders = new ListProvidersService(
      fakeUsersRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to list the providers', async () => {
    const user01 = await fakeUsersRepository.create({
      name: 'user01',
      email: 'user01@example.com',
      password: '123456',
    });
    const user02 = await fakeUsersRepository.create({
      name: 'user02',
      email: 'user02@example.com',
      password: '123456',
    });
    const user03 = await fakeUsersRepository.create({
      name: 'user03',
      email: 'user03@example.com',
      password: '123456',
    });

    const loggeduser = await fakeUsersRepository.create({
      name: 'loggeduser',
      email: 'loggeduser@example.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggeduser.id,
    });

    expect(providers).toEqual([user01, user02, user03]);
  });
});
