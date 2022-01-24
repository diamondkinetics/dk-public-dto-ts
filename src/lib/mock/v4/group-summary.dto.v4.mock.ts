import { define } from 'cooky-cutter';
import { company, image, random } from 'faker';

import { GroupSummaryDTOV4 } from './../../dto/v4/group-summary.dto.v4';

export const mockGroupSummaryDTOV4 = define<GroupSummaryDTOV4>({
	uuid: () => random.uuid(),
	fullName: () => company.companyName(),
	description: () => company.bsBuzz(),
	groupImageUrl: () => image.imageUrl(),
	confirmedMemberCount: () => random.number(100),
	joinOpen: () => random.boolean(),
	canViewMembers: () => random.boolean()
});
