import { extend, Factory } from 'cooky-cutter';

import { AbstractSyncableDTOV2 } from './../../dto/v2/abstract-syncable.dto.v2';
import { BatBrandDTOV2 } from './../../dto/v2/bat-brand.dto.v2';
import { mockAbstractSyncableDTOV2 } from './abstract-syncable.dto.v2.mock';
import { mockBatModelDTOV2 } from './bat-model.dto.v2.mock';

export const mockBatBrandDTOV2: Factory<BatBrandDTOV2> = extend<AbstractSyncableDTOV2, BatBrandDTOV2>(
	mockAbstractSyncableDTOV2,
	{
		name: () => 'Marucci',
		models: () => Array.from({ length: 3 }, () => mockBatModelDTOV2({ brand: { name: 'Marucci'}}))
	}
);
