import { AbstractTimestampDTOV4 } from './abstract-timestamp.dto.v4';

export interface AbstractSyncableDTOV4 extends AbstractTimestampDTOV4 {
	uuid?: string;
	deleted?: boolean;
}
