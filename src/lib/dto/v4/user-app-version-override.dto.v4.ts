import { AbstractSyncableDTOV4 } from './abstract-syncable.dto.v4';
import { UserProfileBasicsDTOV2 } from "../v2";

export interface UserAppVersionOverrideDTOV4 extends AbstractSyncableDTOV4{
	effectiveStarting: string;
	effectiveUntil: string;
	versionKey: string;
	value: string;
	user: UserProfileBasicsDTOV2;
	batchUserUuids: string[];
}
