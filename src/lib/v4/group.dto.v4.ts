import { RoleDTOV2, UserProfileBasicsDTOV2 } from '../v2';
import { AbstractSyncableDTOV4 } from './abstract-syncable.dto.v4';
import { GroupMembershipDTOV4 } from './group-membership.dto.v4';
import { GroupSummaryDTOV4 } from './group-summary.dto.v4';

export interface GroupDTOV4 extends AbstractSyncableDTOV4 {
	creator?: UserProfileBasicsDTOV2;
	parentGroup?: GroupSummaryDTOV4;
	childGroups?: GroupSummaryDTOV4[];
	memberViewRole: RoleDTOV2;
	descViewRole: RoleDTOV2;
	inviteRole: RoleDTOV2;
	sessionViewRole?: RoleDTOV2;
	requestorMembership?: GroupMembershipDTOV4;
	confirmedMembership?: GroupMembershipDTOV4[];
	invitations?: GroupMembershipDTOV4[];
	requests?: GroupMembershipDTOV4[];
	confirmedMemberCount?: number;
	fullName: string;
	description?: string;
	groupImageUrl?: string;
	joinPassword?: string;
	joinOpen: boolean;
	joinByInvite: boolean;
	joinByRequest: boolean;
	joinByPassword: boolean;
	searchable: boolean;
}
