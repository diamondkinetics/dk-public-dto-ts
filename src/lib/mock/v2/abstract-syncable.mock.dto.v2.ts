import * as Factory from 'factory.ts';
import * as faker from 'faker';

import { AbstractSyncableDTOV2 } from '~lib/v2';
import { abstractTimestampMockDTOV2 } from './abstract-timestamp.mock.dto.v2';

export const abstractSyncableMockDTOV2 = Factory.Sync.makeFactory<AbstractSyncableDTOV2>({
	...abstractTimestampMockDTOV2,
	uuid: faker.random.uuid(),
	deleted: faker.random.boolean()
});
