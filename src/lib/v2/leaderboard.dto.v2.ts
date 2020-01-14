import { AggregationOperation } from './../enum/aggregation-operation';
import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';
import { UserProfileDTOV2 } from './user-profile.dto.v2';

export interface LeaderboardDTOV2 extends AbstractSyncableDTOV2 {
	uuid?: string;
	creator?: UserProfileDTOV2;
	groupUuid?: string;
	fullName: string;
	operation: AggregationOperation;
	metric?: string;
	maxResults: number;
	lookbackTime?: number;
	startDate?: string;
	endDate?: string;
	public: boolean;
}
