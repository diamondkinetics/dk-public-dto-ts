import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { GroupSummaryDTOV4 } from './../../dto';

export const mockGroupSummaryDTOV4 = cookyCutter.define<GroupSummaryDTOV4>({
	uuid: faker.random.uuid(),
	fullName: faker.company.companyName(),
	description: faker.company.bsBuzz(),
	groupImageUrl: faker.image.imageUrl(),
	confirmedMemberCount: faker.random.number(100)
});
