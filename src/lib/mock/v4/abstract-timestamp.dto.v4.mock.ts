import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { AbstractTimestampDTOV4 } from '../../dto';

export const mockAbstractTimestampDTOV4 = cookyCutter.define<AbstractTimestampDTOV4>({
	creationDate: faker.date.past(1).toISOString(),
	lastUpdate: faker.date.past(0.5).toISOString()
});
