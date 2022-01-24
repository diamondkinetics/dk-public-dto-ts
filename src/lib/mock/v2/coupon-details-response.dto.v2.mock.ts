import { define } from 'cooky-cutter';
import { helpers, random } from 'faker';

import { CouponDetailsResponseDTOV2 } from './../../dto/v2/coupon-details-response.dto.v2';
import { DKSubscription } from './../../enum/dk-subscription';

export const mockCouponDetailsResponseDTOV2 = define<CouponDetailsResponseDTOV2>({
	id: () => random.alphaNumeric(),
	dkSubscription: () => helpers.randomize(DKSubscription.asArray().map(s => s.getName())),
	durationInMonths: () => random.number(12)
});
