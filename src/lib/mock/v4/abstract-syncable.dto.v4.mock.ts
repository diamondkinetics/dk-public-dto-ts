import { extend } from 'cooky-cutter';
import { random } from 'faker';

import { AbstractTimestampDTOV4 } from './../../dto/v4/abstract-timestamp.dto.v4';
import { AbstractSyncableDTOV4 } from './../../dto/v4/abstract-syncable.dto.v4';
import { mockAbstractTimestampDTOV4 } from './abstract-timestamp.dto.v4.mock';

export const mockAbstractSyncableDTOV4 = extend<AbstractTimestampDTOV4, AbstractSyncableDTOV4>(
	mockAbstractTimestampDTOV4,
	{
		uuid: () => random.uuid(),
		deleted: () => random.boolean()
	}
);
