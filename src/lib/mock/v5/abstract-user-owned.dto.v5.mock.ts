import { extend } from 'cooky-cutter';

import { AbstractSyncableResponseV5 } from './../../dto/v5/abstract-syncable.dto.v5';
import { AbstractUserOwnedResponseV5 } from './../../dto/v5/abstract-user-owned.dto.v5';
import { mockAbstractSyncableResponseV5 } from './abstract-syncable.dto.v5.mock';
import { mockUserResponseV5 } from './user.dto.v5.mock';

export const mockAbstractUserOwnedResponseV5 = extend<AbstractSyncableResponseV5, AbstractUserOwnedResponseV5>(
    mockAbstractSyncableResponseV5,
    {
        user: () => mockUserResponseV5()
    }
);
