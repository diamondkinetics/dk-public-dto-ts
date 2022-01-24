import { extend } from 'cooky-cutter';
import { random } from 'faker';

import { AbstractSyncableDTOV2 } from './../../dto/v2/abstract-syncable.dto.v2';
import { AbstractTimestampDTOV2 } from './../../dto/v2/abstract-timestamp.dto.v2';
import { mockAbstractTimestampDTOV2 } from './abstract-timestamp.dto.v2.mock';

export const mockAbstractSyncableDTOV2 = extend<AbstractTimestampDTOV2, AbstractSyncableDTOV2>(
	mockAbstractTimestampDTOV2,
	{
		uuid: () => random.uuid(),
		deleted: () => random.boolean()
	}
);
