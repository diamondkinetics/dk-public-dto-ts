import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { GroupDTOV4, GroupMembershipDTOV4 } from '../../dto';
import { mockAbstractSyncableDTOV4 } from './abstract-syncable.dto.v4.mock';
import { mockRoleDTOV2, mockUserProfileBasicsDTOV2 } from './../v2';
import { mockGroupMembershipDTOV4 } from './group-membership.dto.v4.mock';

const members = cookyCutter.array<GroupMembershipDTOV4>(mockGroupMembershipDTOV4, faker.random.number(20));
const invitations = cookyCutter.array<GroupMembershipDTOV4>(mockGroupMembershipDTOV4, faker.random.number(10));
const requests = cookyCutter.array<GroupMembershipDTOV4>(mockGroupMembershipDTOV4, faker.random.number(10));

export const mockGroupDTOV4: cookyCutter.Factory<GroupDTOV4> = cookyCutter.define<GroupDTOV4>({
	...mockAbstractSyncableDTOV4(),
	creator: mockUserProfileBasicsDTOV2(),
	parentGroup: undefined,
	childGroups: undefined,
	memberViewRole: mockRoleDTOV2(),
	descViewRole: mockRoleDTOV2(),
	inviteRole: mockRoleDTOV2(),
	sessionViewRole: mockRoleDTOV2(),
	requestorMembership: mockGroupMembershipDTOV4(),
	confirmedMemberships: members().map(gm => {
		gm.isInvitation = false;
		gm.isRequest = false;

		return gm;
	}),
	invitations: invitations().map(gm => {
		gm.isInvitation = true;
		gm.isRequest = false;

		return gm;
	}),
	requests: requests().map(gm => {
		gm.isRequest = true;
		gm.isInvitation = false;

		return gm;
	}),
	confirmedMemberCount: members.length,
	fullName: faker.company.companyName(),
	description: faker.company.bsBuzz(),
	groupImageUrl: faker.image.imageUrl(),
	joinPassword: undefined,
	joinOpen: faker.random.boolean(),
	joinByInvite: faker.random.boolean(),
	joinByRequest: faker.random.boolean(),
	joinByPassword: false,
	searchable: faker.random.boolean()
});
