import * as Factory from 'factory.ts';
import * as faker from 'faker';

import { UserAppVersionOverrideDTOV2 } from '~lib/v2';

export const mockUserAppVersionOverrideDTOV2Factory = Factory.Sync.makeFactory<UserAppVersionOverrideDTOV2>({
	deleted: faker.random.boolean(),
	effectiveStarting: faker.date.past(1).toISOString(),
	effectiveUntil: faker.date.past(0.5).toISOString(),
	versionKey: faker.database.column(),
	value: faker.system.semver()
});
