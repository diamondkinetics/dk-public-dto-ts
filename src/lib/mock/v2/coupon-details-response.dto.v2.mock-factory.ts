import * as Factory from 'factory.ts';
import * as faker from 'faker';

import { CouponDetailsResponseDTOV2 } from '~lib/v2';
import { DKSubscription } from '~lib/enum';

export const mockCouponDetailsResponseDTOV2Factory = Factory.Sync.makeFactory<CouponDetailsResponseDTOV2>({
	id: faker.random.alphaNumeric(),
	dkSubscription: DKSubscription.MONTHLY_PREMIUM_HITTER.getName,
	durationInMonths: faker.random.number(12)
});
