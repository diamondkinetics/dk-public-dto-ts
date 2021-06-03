import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { AbstractSyncableDTOV4 } from '../../dto';
import { mockAbstractTimestampDTOV4 } from './abstract-timestamp.dto.v4.mock';

export const mockAbstractSyncableDTOV4 = cookyCutter.define<AbstractSyncableDTOV4>({
	...mockAbstractTimestampDTOV4(),
	uuid: faker.random.uuid(),
	deleted: faker.random.boolean()
});
