import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { UserAppVersionOverrideDTOV2 } from '../../dto/v2';

export const mockUserAppVersionOverrideDTOV2 = cookyCutter.define<UserAppVersionOverrideDTOV2>({
	deleted: faker.random.boolean(),
	effectiveStarting: faker.date.past(1).toISOString(),
	effectiveUntil: faker.date.past(0.5).toISOString(),
	versionKey: faker.database.column(),
	value: faker.system.semver()
});
