import { extend, Factory } from 'cooky-cutter';
import { random } from 'faker';

import { AbstractSyncableDTOV2 } from './../../dto/v2/abstract-syncable.dto.v2';
import { BatModelDTOV2 } from './../../dto/v2/bat-model.dto.v2';
import { mockAbstractSyncableDTOV2 } from './abstract-syncable.dto.v2.mock';
import { mockBatBrandDTOV2 } from './bat-brand.dto.v2.mock';

export const mockBatModelDTOV2: Factory<BatModelDTOV2> = extend<AbstractSyncableDTOV2, BatModelDTOV2>(
	mockAbstractSyncableDTOV2,
	{
		name: () => 'DK Smart Bat',
		embeddable: () => random.boolean(),
		embedded: () => random.boolean(),
		brand: () => mockBatBrandDTOV2()
	}
);
