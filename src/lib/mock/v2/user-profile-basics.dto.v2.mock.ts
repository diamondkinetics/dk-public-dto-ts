import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { UserProfileBasicsDTOV2 } from '../../dto';
import { BattingOrientation, Position } from '../../enum';

export const mockUserProfileBasicsDTOV2 = cookyCutter.define<UserProfileBasicsDTOV2>({
	uuid: faker.random.uuid(),
	firstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	teamName: faker.company.companyName(),
	primaryEmail: faker.internet.email(),
	nickname: faker.internet.userName(),
	profileImageUrl: faker.image.imageUrl(),
	height: faker.random.number(80).toString(),
	weight: faker.random.number(250).toString(),
	battingOrientation: BattingOrientation.RIGHTY.getName,
	throwsHandedness: BattingOrientation.RIGHTY.getName,
	position: Position.CENTER_FIELD.getName,
	state: faker.address.stateAbbr(),
	graduationYear: faker.date.future().getFullYear().toString(),
	deleted: false,
	coach: false
});
