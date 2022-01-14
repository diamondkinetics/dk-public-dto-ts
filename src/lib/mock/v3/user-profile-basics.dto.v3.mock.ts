import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { AccountStatus } from './../../enum';
import { UserProfileBasicsDTOV3 } from './../../dto/v3';

export const mockUserProfileBasicsDTOV3 = cookyCutter.define<UserProfileBasicsDTOV3>({
	uuid: () => faker.random.uuid(),
	firstName: () => faker.name.firstName(),
	lastName: () => faker.name.lastName(),
	profileImageUrl: () => faker.image.imageUrl(),
	accountStatus: () => AccountStatus.PAID.getName(),
	paid: () => true,
	paidViaLicense: () => false,
	state: () => undefined,
	graduationYear: () => undefined,
	position: () => undefined
});
