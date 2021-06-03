import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { RoleDTOV2 } from './../../dto/v2';

export const mockRoleDTOV2 = cookyCutter.define<RoleDTOV2>({
	shortName: faker.company.bsNoun(),
	fullName: faker.company.bsAdjective(),
	desc: faker.company.bsBuzz(),
	hierarchy: faker.random.number(1000),
	isAdmin: faker.random.boolean(),
	isMember: true
});
