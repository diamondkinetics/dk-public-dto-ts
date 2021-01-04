import * as cookyCutter from 'cooky-cutter';

import { BatBrandDTOV2 } from './../../dto';
import { mockAbstractSyncableDTOV2 } from './abstract-syncable.dto.v2.mock';

export const mockBatBrandDTOV2 = cookyCutter.define<BatBrandDTOV2>({
	...mockAbstractSyncableDTOV2(),
	name: 'Marucci',
	models: []
});
