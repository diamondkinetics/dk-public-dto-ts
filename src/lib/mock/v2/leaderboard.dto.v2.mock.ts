import { extend } from 'cooky-cutter';
import { helpers, company, random } from 'faker';

import { AbstractSyncableDTOV2 } from './../../dto/v2/abstract-syncable.dto.v2';
import { LeaderboardDTOV2 } from './../../dto/v2/leaderboard.dto.v2';
import { AggregationOperation } from './../../enum/aggregation-operation';
import { mockAbstractSyncableDTOV2 } from './abstract-syncable.dto.v2.mock';
import { mockUserProfileDTOV2 } from './user-profile.dto.v2.mock';

export const mockLeaderboardDTOV2 = extend<AbstractSyncableDTOV2, LeaderboardDTOV2>(
	mockAbstractSyncableDTOV2,
	{
		uuid: () => random.uuid(),
		creator: () => mockUserProfileDTOV2(),
		groupUuid: () => random.uuid(),
		fullName: () => company.catchPhrase(),
		operation: () => helpers.randomize(AggregationOperation.asArray().map(ao => ao.getFullName())),
		metric: () => undefined,
		maxResults: () => 10,
		lookbackTime: () => 604800000,
		startDate: () => undefined,
		endDate: () => undefined,
		public: () => false
	}
);
