import { define } from 'cooky-cutter';
import { random } from 'faker';

import { GroupMembershipDTOV4 } from './../../dto/v4/group-membership.dto.v4';
import { mockRoleDTOV2 } from './../v2/role.dto.v2.mock';
import { mockUserProfileBasicsDTOV2 } from './../v2/user-profile-basics.dto.v2.mock';

const userProfileBasics = () => mockUserProfileBasicsDTOV2();
const role = () => mockRoleDTOV2();

export const mockGroupMembershipDTOV4 = define<GroupMembershipDTOV4>({
	user: () => userProfileBasics(),
	group: () => undefined,
	invitor: () => userProfileBasics(),
	role: () => role(),
	roleShort: () => role().shortName,
	isInvitation: () => random.boolean(),
	isRequest: () => random.boolean()
});
