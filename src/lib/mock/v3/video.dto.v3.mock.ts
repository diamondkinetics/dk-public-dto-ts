import { extend } from 'cooky-cutter';
import { date, internet, random } from 'faker';

import { AbstractSyncableDTOV3 } from './../../dto/v3/abstract-syncable.dto.v3';
import { VideoDTOV3 } from './../../dto/v3/video.dto.v3';
import { mockAbstractSyncableDTOV3 } from './abstract-syncable.dto.v3.mock';

export const mockVideoDTOV3 = extend<AbstractSyncableDTOV3, VideoDTOV3>(
	mockAbstractSyncableDTOV3,
	{
		url: () => internet.url(),
		processedUrl: () => internet.url(),
		jsonUrl: () => internet.url(),
		startTime: () => date.past().toISOString(),
		audioPeakDate: () => date.past().toISOString(),
		durationMillis: () => random.number(5000),
		fileSize: () => random.number(100000),
		finishedUploading: () => random.boolean()
	}
);
