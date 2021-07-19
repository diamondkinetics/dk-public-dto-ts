import { UserProfileBasicsDTOV2 } from './user-profile-basics.dto.v2';

export interface LeaderboardResultDTOV2 {
	leaderboardUuid?: string;
	leaderboardName?: string;
	user?: UserProfileBasicsDTOV2;
	groupName?: string;
	leaderboardRank?: number;
	metricValue?: number;
	metricUnit?: string;
	change?: number;
	numReps?: number;
}
