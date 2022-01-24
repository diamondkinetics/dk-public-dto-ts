import { define } from 'cooky-cutter';
import { company, random } from 'faker';

import { RoleDTOV2 } from './../../dto/v2/role.dto.v2';

export const mockRoleDTOV2 = define<RoleDTOV2>({
	shortName: () => company.bsNoun(),
	fullName: () => company.bsAdjective(),
	desc: () => company.bsBuzz(),
	hierarchy: () => random.number(1000),
	isAdmin: () => random.boolean(),
	isMember: () => true
});
