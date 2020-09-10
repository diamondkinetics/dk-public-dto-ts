import { AbstractTimestampDTOV2 } from './abstract-timestamp.dto.v2';

export interface AbstractSyncableDTOV2 extends AbstractTimestampDTOV2 {
	uuid?: string;
	deleted?: boolean;
}
