import { define } from 'cooky-cutter';
import * as faker from 'faker';

import { AbstractTimestampDTOV2 } from '../../v2';

export const mockAbstractTimestampDTOV2 = define<AbstractTimestampDTOV2>({
	creationDate: faker.date.past(1).toISOString(),
	lastUpdate: faker.date.past(0.5).toISOString()
});
