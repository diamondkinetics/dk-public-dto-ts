import { extend } from 'cooky-cutter';
import { internet, name, random } from 'faker';

import { AbstractSyncableResponseV5 } from './../../dto/v5/abstract-syncable.dto.v5';
import { UserResponseV5 } from './../../dto/v5/user.dto.v5';
import { mockAbstractSyncableResponseV5 } from "./abstract-syncable.dto.v5.mock";

export const mockUserResponseV5 = extend<AbstractSyncableResponseV5, UserResponseV5>(
    mockAbstractSyncableResponseV5,
    {
        firstName: () => name.firstName(),
        lastName: () => name.lastName(),
        email: () => internet.email(),
        coach: () => random.boolean()
    }
);
