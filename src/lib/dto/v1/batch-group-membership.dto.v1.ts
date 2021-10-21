import { GroupMembershipDTOV4 } from '../v4';

export interface BatchGroupMembershipDTOV1 extends GroupMembershipDTOV4 {
	userUuids: string[];
}
