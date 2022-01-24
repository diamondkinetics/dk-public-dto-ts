import { define } from 'cooky-cutter';
import { finance, random } from 'faker';

import { mockGroupDTOV4 } from '../v4/group.dto.v4.mock';
import { LeaderboardResultDTOV2 } from './../../dto/v2/leaderboard-result.dto.v2';
import { mockLeaderboardDTOV2 } from './leaderboard.dto.v2.mock';
import { mockUserProfileBasicsDTOV2 } from './user-profile-basics.dto.v2.mock';

export const mockLeaderboardResultDTOV2 = define<LeaderboardResultDTOV2>({
	leaderboardUuid: () => mockLeaderboardDTOV2().uuid,
	leaderboardName: () => mockLeaderboardDTOV2().fullName,
	user: () => mockUserProfileBasicsDTOV2(),
	groupName: () => mockGroupDTOV4().fullName,
	leaderboardRank: () => random.number(10),
	metricValue: () => random.number(3000),
	metricUnit: () => finance.currencyCode(),
	change: () => undefined,
	numReps: () => undefined
});
