import * as Factory from 'factory.ts';
import * as faker from 'faker';

import { AbstractSyncableDTOV2 } from '~lib/v2';
import { mockAbstractTimestampDTOV2Factory } from './abstract-timestamp.dto.v2.mock-factory';

export const mockAbstractSyncableDTOV2Factory = Factory.Sync.makeFactory<AbstractSyncableDTOV2>({
	...mockAbstractTimestampDTOV2Factory.build(),
	uuid: faker.random.uuid(),
	deleted: faker.random.boolean()
});
