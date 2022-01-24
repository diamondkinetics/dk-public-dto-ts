import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { AbstractSyncableDTOV2 } from '../../dto';
import { mockAbstractTimestampDTOV2 } from './abstract-timestamp.dto.v2.mock';

export const mockAbstractSyncableDTOV2 = cookyCutter.define<AbstractSyncableDTOV2>({
	...mockAbstractTimestampDTOV2(),
	uuid: () => faker.random.uuid(),
	deleted: () => faker.random.boolean()
});
