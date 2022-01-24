import { define } from 'cooky-cutter';
import { date } from 'faker';

import { AbstractTimestampDTOV3 } from './../../dto/v3/abstract-timestamp.dto.v3';

export const mockAbstractTimestampDTOV3 = define<AbstractTimestampDTOV3>({
	creationDate: () => date.past(1).toISOString(),
	lastUpdate: () => date.past(0.5).toISOString()
});
