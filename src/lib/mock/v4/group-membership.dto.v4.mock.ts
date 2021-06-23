import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { GroupMembershipDTOV4 } from './../../dto';
import { mockUserProfileBasicsDTOV2, mockRoleDTOV2 } from './../v2';

export const mockGroupMembershipDTOV4 = cookyCutter.define<GroupMembershipDTOV4>({
	user: () => mockUserProfileBasicsDTOV2(),
	group: undefined,
	invitor: () => mockUserProfileBasicsDTOV2(),
	role: () => mockRoleDTOV2(),
	roleShort: () => mockRoleDTOV2().shortName,
	isInvitation: () => faker.random.boolean(),
	isRequest: () => faker.random.boolean()
});
