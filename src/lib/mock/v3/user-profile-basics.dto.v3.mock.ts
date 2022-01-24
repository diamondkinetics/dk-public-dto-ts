import * as cookyCutter from 'cooky-cutter';
import { helpers, image, name, random } from 'faker';

import { AccountStatus } from './../../enum/account-status';
import { UserProfileBasicsDTOV3 } from './../../dto/v3/user-profile-basics.dto.v3';

export const mockUserProfileBasicsDTOV3 = cookyCutter.define<UserProfileBasicsDTOV3>({
	uuid: () => random.uuid(),
	firstName: () => name.firstName(),
	lastName: () => name.lastName(),
	profileImageUrl: () => image.imageUrl(),
	accountStatus: () => helpers.randomize(AccountStatus.asArray().map(s => s.getName())),
	paid: () => true,
	paidViaLicense: () => false,
	state: () => undefined,
	graduationYear: () => undefined,
	position: () => undefined
});
