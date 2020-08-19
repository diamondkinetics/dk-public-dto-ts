import * as Factory from 'factory.ts';
import * as faker from 'faker';

import { AbstractTimestampDTOV2 } from '~lib/v2';

export const mockAbstractTimestampDTOV2Factory = Factory.Sync.makeFactory<AbstractTimestampDTOV2>({
	creationDate: faker.date.past(1).toISOString(),
	lastUpdate: faker.date.past(0.5).toISOString()
});
