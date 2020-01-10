import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';

export interface VideoDTOV3 extends AbstractSyncableDTOV3 {
	url: string;
	processedUrl?: string;
	jsonUrl?: string;
	startTime: string;
	audioPeakDate: string;
	durationMillis: number;
	fileSize: number;
	finishedUploading: boolean;
}
