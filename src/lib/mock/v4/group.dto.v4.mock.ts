import { array, extend, Factory } from 'cooky-cutter';
import { company, image, random } from 'faker';

import { AbstractSyncableDTOV4 } from './../../dto/v4/abstract-syncable.dto.v4';
import { GroupDTOV4 } from './../../dto/v4/group.dto.v4';
import { GroupMembershipDTOV4 } from './../../dto/v4/group-membership.dto.v4';
import { mockAbstractSyncableDTOV4 } from './abstract-syncable.dto.v4.mock';
import { mockRoleDTOV2 } from './../v2/role.dto.v2.mock';
import { mockUserProfileBasicsDTOV2 } from './../v2/user-profile-basics.dto.v2.mock';
import { mockGroupMembershipDTOV4 } from './group-membership.dto.v4.mock';

const members = array<GroupMembershipDTOV4>(mockGroupMembershipDTOV4, random.number(20));
const invitations = array<GroupMembershipDTOV4>(mockGroupMembershipDTOV4, random.number(10));
const requests = array<GroupMembershipDTOV4>(mockGroupMembershipDTOV4, random.number(10));

export const mockGroupDTOV4: Factory<GroupDTOV4> = extend<AbstractSyncableDTOV4, GroupDTOV4>(
	mockAbstractSyncableDTOV4,
	{
		creator: () => mockUserProfileBasicsDTOV2(),
		parentGroup: () => undefined,
		childGroups: () => undefined,
		memberViewRole: () => mockRoleDTOV2(),
		descViewRole: () => mockRoleDTOV2(),
		inviteRole: () => mockRoleDTOV2(),
		sessionViewRole: () => mockRoleDTOV2(),
		requestorMembership: () => mockGroupMembershipDTOV4(),
		confirmedMemberships: () => members({ isInvitation: false, isRequest: false }),
		invitations: () => invitations({ isInvitation: true, isRequest: false, invitor: mockUserProfileBasicsDTOV2() }),
		requests: () => requests({ isInvitation: false, isRequest: true, invitor: undefined }),
		confirmedMemberCount: () => members().length,
		fullName: () => company.companyName(),
		description: () => company.bsBuzz(),
		groupImageUrl: () => image.imageUrl(),
		joinPassword: () => undefined,
		joinOpen: () => random.boolean(),
		joinByInvite: () => random.boolean(),
		joinByRequest: () => random.boolean(),
		joinByPassword: () => false,
		searchable: () => random.boolean()
	}
);
