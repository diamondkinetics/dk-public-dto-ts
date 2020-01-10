import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';

export interface VideoDTOV2 extends AbstractSyncableDTOV2 {
	url: string;
	startTime: string;
	audioPeakDate: string;
	durationMillis: number;
	fileSize?: number;
	finishedUploading: boolean;
}
