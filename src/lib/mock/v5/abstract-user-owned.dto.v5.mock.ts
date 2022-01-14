import * as cookyCutter from 'cooky-cutter';
import { AbstractUserOwnedResponseV5 } from "../../dto";
import { mockAbstractSyncableResponseV5 } from "./abstract-syncable.dto.v5.mock";
import { mockUserResponseV5 } from "./user.dto.v5.mock";

export const mockAbstractUserOwnedResponseV5 = cookyCutter.define<AbstractUserOwnedResponseV5>({
    ...mockAbstractSyncableResponseV5(),
    user: () => mockUserResponseV5()
});