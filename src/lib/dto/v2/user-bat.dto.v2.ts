import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';
import { BatModelDTOV2 } from './bat-model.dto.v2';

export interface UserBatDTOV2 extends AbstractSyncableDTOV2 {
	userUuid?: string;
	name?: string;
	model: BatModelDTOV2;
	length: number;
	weight: number;
	price?: number;
	materialType: string;
	embedded?: boolean;
}
