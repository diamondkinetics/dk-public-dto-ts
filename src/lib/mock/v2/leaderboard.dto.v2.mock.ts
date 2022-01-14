import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { mockAbstractSyncableDTOV2 } from './abstract-syncable.dto.v2.mock';
import { mockUserProfileDTOV2 } from './user-profile.dto.v2.mock';
import { mockGroupDTOV4 } from './../v4/group.dto.v4.mock';
import { LeaderboardDTOV2 } from './../../dto/v2/leaderboard.dto.v2';
import { AggregationOperation } from './../../enum/aggregation-operation';

export const mockLeaderboardDTOV2 = cookyCutter.define<LeaderboardDTOV2>({
	...mockAbstractSyncableDTOV2(),
	uuid: () => faker.random.uuid(),
	creator: () => mockUserProfileDTOV2(),
	groupUuid: () => mockGroupDTOV4().uuid,
	fullName: () => faker.company.catchPhrase(),
	operation: AggregationOperation.COUNT.getFullName(),
	metric: undefined,
	maxResults: 10,
	lookbackTime: 604800000,
	startDate: undefined,
	endDate: undefined,
	public: false
});
