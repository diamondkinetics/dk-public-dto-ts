import { define } from 'cooky-cutter';
import { date } from 'faker';

import { AbstractTimestampDTOV4 } from './../../dto/v4/abstract-timestamp.dto.v4';

export const mockAbstractTimestampDTOV4 = define<AbstractTimestampDTOV4>({
	creationDate: () => date.past(1).toISOString(),
	lastUpdate: () => date.past(0.5).toISOString()
});
