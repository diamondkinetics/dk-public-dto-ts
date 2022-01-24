import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { CompetitionLevelDTOV2 } from './../../dto';

import { mockAbstractSyncableDTOV2 } from './abstract-syncable.dto.v2.mock';

export const mockCompetitionLevelDTOV2 = cookyCutter.define<CompetitionLevelDTOV2>({
	...mockAbstractSyncableDTOV2(),
	name: () => faker.random.word(),
	sortOrder: () => faker.random.number(20),
	underThirteen: () => faker.random.boolean()
});
