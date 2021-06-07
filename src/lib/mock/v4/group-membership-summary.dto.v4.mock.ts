import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { GroupMembershipSummaryDTOV4 } from './../../dto';
import { mockGroupMembershipDTOV4 } from './group-membership.dto.v4.mock';

const membership = mockGroupMembershipDTOV4();

export const mockGroupMembershipSummaryDTOV4 = cookyCutter.define<GroupMembershipSummaryDTOV4>({
	uuid: faker.random.uuid(),
	groupUuid: membership.group?.uuid ?? faker.random.uuid(),
	parentGroupUuid: membership.group?.parentGroup?.uuid ?? faker.random.uuid(),
	groupFullName: membership.group?.fullName ?? faker.company.companyName(),
	groupDescription: membership.group?.description ?? faker.company.bsBuzz(),
	groupImageUrl: membership.group?.groupImageUrl ?? faker.image.imageUrl(),
	groupDeleted: membership.group?.deleted ?? faker.random.boolean(),
	userRole: membership.role?.fullName ?? faker.random.word(),
	isPendingInvitation: membership.isInvitation,
	isPendingJoinRequest: membership.isRequest,
	invitor: membership.isInvitation ? membership.invitor : undefined,
	confirmedMemberCount: faker.random.number(30)
});
