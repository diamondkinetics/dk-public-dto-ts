import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { AbstractTimestampDTOV2 } from '../../dto';

export const mockAbstractTimestampDTOV2 = cookyCutter.define<AbstractTimestampDTOV2>({
	creationDate: () => faker.date.past(1).toISOString(),
	lastUpdate: () => faker.date.past(0.5).toISOString()
});
