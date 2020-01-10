import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';
import { BatBrandDTOV2 } from './bat-brand.dto.v2';
import { BatModelConfigurationDTOV2 } from './bat-model-configuration.dto.v2';

export interface BatModelDTOV2 extends AbstractSyncableDTOV2 {
	name?: string;
	embeddable: boolean;
	embedded: boolean;
	brand: BatBrandDTOV2;
	configuration: BatModelConfigurationDTOV2[];
}
