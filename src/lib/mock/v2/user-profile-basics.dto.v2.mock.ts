import { define } from 'cooky-cutter';
import { address, company, date, helpers, image, internet, name, random } from 'faker';

import { UserProfileBasicsDTOV2 } from './../../dto/v2/user-profile-basics.dto.v2';
import { AccountStatus } from './../../enum/account-status';
import { BattingOrientation } from './../../enum/batting-orientation';
import { Position } from './../../enum/position';

export const mockUserProfileBasicsDTOV2 = define<UserProfileBasicsDTOV2>({
	uuid: () => random.uuid(),
	firstName: () => name.firstName(),
	lastName: () => name.lastName(),
	teamName: () => company.companyName(),
	primaryEmail: () => internet.email(),
	nickname: () => internet.userName(),
	profileImageUrl: () => image.imageUrl(),
	height: () => random.number(80).toString(),
	weight: () => random.number(250).toString(),
	battingOrientation: () => helpers.randomize(BattingOrientation.asArray().map(bo => bo.getName())),
	throwsHandedness: () => helpers.randomize(BattingOrientation.asArray(true).map(bo => bo.getName())),
	position: () => Position.CENTER_FIELD.getName(),
	state: () => address.stateAbbr(),
	graduationYear: () => date.future().getFullYear().toString(),
	deleted: () => false,
	coach: () => false,
	hittingAccountStatus: () => helpers.randomize(AccountStatus.asArray().map(s => s.getName())),
	hittingRenewalDate: () => date.future().toString(),
	pitchingAccountStatus: () => helpers.randomize(AccountStatus.asArray().map(s => s.getName())),
	pitchingRenewalDate: () => date.future().toString(),
});
