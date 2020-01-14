import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';
import { GroupDTOV3 } from './group.dto.v3';
import { RoleDTOV3 } from './role.dto.v3';
import { UserProfileBasicsDTOV3 } from './user-profile-basics.dto.v3';

export interface GroupMembershipDTOV3 extends AbstractSyncableDTOV3 {
	user: UserProfileBasicsDTOV3;
	group: GroupDTOV3;
	invitor?: UserProfileBasicsDTOV3;
	role?: RoleDTOV3;
	roleShort?: string;
	isInvitation?: boolean;
	isRequest?: boolean;
}
