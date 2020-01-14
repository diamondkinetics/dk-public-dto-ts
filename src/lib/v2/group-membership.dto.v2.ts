import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';
import { GroupDTOV2 } from './group.dto.v2';
import { RoleDTOV2 } from './role.dto.v2';
import { UserProfileDTOV2 } from './user-profile.dto.v2';

export interface GroupMembershipDTOV2 extends AbstractSyncableDTOV2 {
	user?: UserProfileDTOV2;
	group?: GroupDTOV2;
	roleShort?: string;
	pendingInvitation?: boolean;
	pendingJoinInvite?: boolean;
	invitor?: UserProfileDTOV2;
	role?: RoleDTOV2;
}
