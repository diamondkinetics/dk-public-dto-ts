import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { mockGroupDTOV4 } from '../v4';
import { LeaderboardResultDTOV2 } from './../../dto/v2/leaderboard-result.dto.v2';
import { mockLeaderboardDTOV2 } from './leaderboard.dto.v2.mock';
import { mockUserProfileBasicsDTOV2 } from './user-profile-basics.dto.v2.mock';

export const mockLeaderboardResultDTOV2 = cookyCutter.define<LeaderboardResultDTOV2>({
	leaderboardUuid: () => mockLeaderboardDTOV2().uuid,
	leaderboardName: () => mockLeaderboardDTOV2().fullName,
	user: () => mockUserProfileBasicsDTOV2(),
	groupName: () => mockGroupDTOV4().fullName,
	leaderboardRank: () => faker.random.number(10),
	metricValue: () => faker.random.number(3000),
	metricUnit: () => faker.finance.currencyCode(),
	change: undefined,
	numReps: undefined
});
