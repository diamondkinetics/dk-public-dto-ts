import { UserProfileBasicsDTOV2 } from './user-profile-basics.dto.v2';

export interface LeaderboardResultDTOV2 {
	user?: UserProfileBasicsDTOV2;
	metricValue?: number;
	change?: number;
	numReps?: number;
}
