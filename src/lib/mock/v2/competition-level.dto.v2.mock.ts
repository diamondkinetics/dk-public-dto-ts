import { extend } from 'cooky-cutter';
import { random } from 'faker';

import { AbstractSyncableDTOV2 } from './../../dto/v2/abstract-syncable.dto.v2';
import { CompetitionLevelDTOV2 } from './../../dto/v2/competition-level.dto.v2';
import { mockAbstractSyncableDTOV2 } from './abstract-syncable.dto.v2.mock';

export const mockCompetitionLevelDTOV2 = extend<AbstractSyncableDTOV2, CompetitionLevelDTOV2>(
	mockAbstractSyncableDTOV2,
	{
		name: () => random.word(),
		sortOrder: () => random.number(20),
		underThirteen: () => random.boolean()
	}
);
