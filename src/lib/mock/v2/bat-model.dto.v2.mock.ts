import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { BatModelDTOV2 } from './../../dto';
import { mockAbstractSyncableDTOV2 } from './abstract-syncable.dto.v2.mock';
import { mockBatBrandDTOV2 } from './bat-brand.dto.v2.mock';

export const mockBatModelDTOV2 = cookyCutter.define<BatModelDTOV2>({
	...mockAbstractSyncableDTOV2(),
	name: () => 'DK Smart Bat',
	embeddable: () => faker.random.boolean(),
	embedded: () => faker.random.boolean(),
	brand: () => mockBatBrandDTOV2()
});
