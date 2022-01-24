import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { AbstractSyncableDTOV3 } from '../../dto';
import { mockAbstractTimestampDTOV3 } from './abstract-timestamp.dto.v3.mock';

export const mockAbstractSyncableDTOV3 = cookyCutter.define<AbstractSyncableDTOV3>({
	...mockAbstractTimestampDTOV3(),
	uuid: () => faker.random.uuid(),
	deleted: () => faker.random.boolean()
});
