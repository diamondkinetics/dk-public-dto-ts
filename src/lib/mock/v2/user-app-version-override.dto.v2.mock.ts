import { define } from 'cooky-cutter';
import { date, database, random, system } from 'faker';

import { UserAppVersionOverrideDTOV2 } from '../../dto/v2/user-app-version-override.dto.v2';

export const mockUserAppVersionOverrideDTOV2 = define<UserAppVersionOverrideDTOV2>({
	deleted: () => random.boolean(),
	effectiveStarting: () => date.past(1).toISOString(),
	effectiveUntil: () => date.past(0.5).toISOString(),
	versionKey: () => database.column(),
	value: () => system.semver()
});
