import { UserProfileBasicsDTOV2 } from '../v2';

export interface GroupMembershipSummaryDTOV4 {
	uuid: string;
	groupUuid: string;
	parentGroupUuid?: string;
	groupFullName: string;
	groupDescription?: string;
	groupImageUrl?: string;
	groupDeleted?: boolean;
	userRole?: string;
	isPendingJoinRequest?: boolean;
	isPendingInvitation?: boolean;
	invitor?: UserProfileBasicsDTOV2;
	confirmedMemberCount?: number;
}
