import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';
import { GroupMembershipDTOV3 } from './group-membership.dto.v3';
import { RoleDTOV3 } from './role.dto.v3';
import { UserProfileBasicsDTOV3 } from './user-profile-basics.dto.v3';

export interface GroupDTOV3 extends AbstractSyncableDTOV3 {
	creator?: UserProfileBasicsDTOV3;
	memberViewRole: RoleDTOV3;
	descViewRole: RoleDTOV3;
	inviteRole: RoleDTOV3;
	requestorMembership?: GroupMembershipDTOV3;
	confirmedMemberships?: GroupMembershipDTOV3[];
	invitations?: GroupMembershipDTOV3[];
	requests?: GroupMembershipDTOV3[];
	confirmedMemberCount?: number;
	fullName: string;
	desc?: string;
	groupImageUrl?: string;
	joinPassword?: string;
	joinOpen: boolean;
	joinByInvite: boolean;
	joinByRequest: boolean;
	joinByPassword: boolean;
	searchable: boolean;
}
