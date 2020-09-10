import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';

export interface BatModelConfigurationDTOV2 extends AbstractSyncableDTOV2 {
	name?: string;
	weightAdjustment?: number;
}
