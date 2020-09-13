import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { CouponDetailsResponseDTOV2 } from '../../dto';
import { DKSubscription } from '../../enum';

export const mockCouponDetailsResponseDTOV2 = cookyCutter.define<CouponDetailsResponseDTOV2>({
	id: faker.random.alphaNumeric(),
	dkSubscription: DKSubscription.MONTHLY_PREMIUM_HITTER.getName,
	durationInMonths: faker.random.number(12)
});
