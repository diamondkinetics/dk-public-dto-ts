import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { AbstractTimestampDTOV3 } from '../../dto';

export const mockAbstractTimestampDTOV3 = cookyCutter.define<AbstractTimestampDTOV3>({
	creationDate: () => faker.date.past(1).toISOString(),
	lastUpdate: () => faker.date.past(0.5).toISOString()
});
