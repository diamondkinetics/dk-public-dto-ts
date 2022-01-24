import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import {UserResponseV5} from "../../dto";
import {mockAbstractSyncableResponseV5} from "./abstract-syncable.dto.v5.mock";

export const mockUserResponseV5 = cookyCutter.define<UserResponseV5>({
    ...mockAbstractSyncableResponseV5(),
    firstName: () => faker.name.firstName(),
    lastName: () => faker.name.lastName(),
    nickname: () => faker.helpers.randomize<string>(['', faker.internet.userName()]),
    email: () => faker.internet.email(),
    secondaryEmail: () => '',
    coach: () => faker.random.boolean()
});
