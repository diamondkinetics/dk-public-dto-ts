import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { GroupMembershipDTOV4 } from './../../dto';
import { mockUserProfileBasicsDTOV2, mockRoleDTOV2 } from './../v2';

const mockRole = mockRoleDTOV2();

export const mockGroupMembershipDTOV4 = cookyCutter.define<GroupMembershipDTOV4>({
	user: mockUserProfileBasicsDTOV2(),
	group: undefined,
	invitor: mockUserProfileBasicsDTOV2(),
	role: mockRole,
	roleShort: mockRole.shortName,
	isInvitation: faker.random.boolean(),
	isRequest: faker.random.boolean()
});
