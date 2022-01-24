import { extend } from 'cooky-cutter';
import { random } from 'faker';

import { AbstractSyncableDTOV3 } from '../../dto/v3/abstract-syncable.dto.v3';
import { AbstractTimestampDTOV3 } from './../../dto/v3/abstract-timestamp.dto.v3';
import { mockAbstractTimestampDTOV3 } from './abstract-timestamp.dto.v3.mock';

export const mockAbstractSyncableDTOV3 = extend<AbstractTimestampDTOV3, AbstractSyncableDTOV3>(
	mockAbstractTimestampDTOV3,
	{
		uuid: () => random.uuid(),
		deleted: () => random.boolean()
	}
);
