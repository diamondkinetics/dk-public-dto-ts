import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { VideoDTOV3 } from '../../dto';
import { mockAbstractSyncableDTOV3 } from './abstract-syncable.dto.v3.mock';

export const mockVideoDTOV3 = cookyCutter.define<VideoDTOV3>({
	...mockAbstractSyncableDTOV3(),
	url: () => faker.internet.url(),
	processedUrl: () => faker.internet.url(),
	jsonUrl: () => faker.internet.url(),
	startTime: () => faker.date.past().toISOString(),
	audioPeakDate: () => faker.date.past().toISOString(),
	durationMillis: () => faker.random.number(5000),
	fileSize: () => faker.random.number(100000),
	finishedUploading: () => faker.random.boolean()
});
