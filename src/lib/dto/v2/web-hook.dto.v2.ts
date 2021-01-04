import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';
import { ClientProfileDTOV2 } from './client-profile.dto.v2';

export interface WebHookDTOV2 extends AbstractSyncableDTOV2 {
	client?: ClientProfileDTOV2;
	newDataUrl?: string;
	newConnectionUrl?: string;
	newSwingUrl?: string;
}
