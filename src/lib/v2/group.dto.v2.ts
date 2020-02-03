import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';
import { GroupMembershipDTOV2 } from './group-membership.dto.v2';
import { RoleDTOV2 } from './role.dto.v2';
import { UserProfileDTOV2 } from './user-profile.dto.v2';

export interface GroupDTOV2 extends AbstractSyncableDTOV2 {
	fullName: string;
	creator?: UserProfileDTOV2;
	desc?: string;
	groupImageUrl?: string;
	joinOpen: boolean;
	joinByInvite: boolean;
	joinByRequest: boolean;
	joinByPassword: boolean;
	searchable: boolean;
	memberViewRole: RoleDTOV2;
	descViewRole: RoleDTOV2;
	inviteRole: RoleDTOV2;
	requestorMembership?: GroupMembershipDTOV2;
	memberships?: GroupMembershipDTOV2[];
	invitations?: GroupMembershipDTOV2[];
	requests?: GroupMembershipDTOV2[];
	joinPassword?: string;
}
