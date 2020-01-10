import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';
import { BatModelDTOV2 } from './bat-model.dto.v2';

export interface BatBrandDTOV2 extends AbstractSyncableDTOV2 {
	name?: string;
	models: BatModelDTOV2[]
}
