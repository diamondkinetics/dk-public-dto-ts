import { RoleDTOV2 } from '../v2';

export interface GroupMembershipCreationDTOV1 {
	userUuid: string;
	groupUuid: string;
	role: RoleDTOV2;
}
