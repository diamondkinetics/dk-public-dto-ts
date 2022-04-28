import { define } from 'cooky-cutter';
import { company, image, random } from 'faker';

import { GroupMembershipSummaryDTOV4 } from './../../dto';
import { mockGroupMembershipDTOV4 } from './group-membership.dto.v4.mock';

const membership = () => mockGroupMembershipDTOV4();

export const mockGroupMembershipSummaryDTOV4 = define<GroupMembershipSummaryDTOV4>({
	uuid: () => random.uuid(),
	deleted: () => random.boolean(),
	groupUuid: () => membership().group?.uuid ?? random.uuid(),
	parentGroupUuid: () => membership().group?.parentGroup?.uuid ?? random.uuid(),
	groupFullName: () => membership().group?.fullName ?? company.companyName(),
	groupDescription: () => membership().group?.description ?? company.bsBuzz(),
	groupImageUrl: () => membership().group?.groupImageUrl ?? image.imageUrl(),
	groupDeleted: () => membership().group?.deleted ?? random.boolean(),
	userRole: () => membership().role?.fullName ?? random.word(),
	pendingInvitation: () => membership().isInvitation,
	pendingJoinRequest: () => membership().isRequest,
	invitor: () => membership().isInvitation ? membership().invitor : undefined,
	confirmedMemberCount: () => random.number(30)
});
