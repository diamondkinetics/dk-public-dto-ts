import { AbstractTimestampDTOV3 } from './abstract-timestamp.dto.v3';

export interface AbstractSyncableDTOV3 extends AbstractTimestampDTOV3 {
	uuid?: string;
	deleted?: boolean;
}
