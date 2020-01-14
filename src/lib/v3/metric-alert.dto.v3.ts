import { UserProfileBasicsDTOV2 } from './../v2/user-profile-basics.dto.v2';
import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';

export interface MetricAlertDTOV3 extends AbstractSyncableDTOV3 {
	user: UserProfileBasicsDTOV2;
	groupUuid: string;
	metric: string;
	operation: string;
	value: number;
	sensorEventType: string;
}
