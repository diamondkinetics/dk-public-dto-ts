import { define } from 'cooky-cutter';
import { date } from 'faker';

import { AbstractTimestampDTOV2 } from './../../dto/v2/abstract-timestamp.dto.v2';

export const mockAbstractTimestampDTOV2 = define<AbstractTimestampDTOV2>({
	creationDate: () => date.past(1).toISOString(),
	lastUpdate: () => date.past(0.5).toISOString()
});
