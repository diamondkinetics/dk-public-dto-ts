import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { AbstractSensorEventDTOV3 } from './../../dto/v3/abstract-sensor-event.dto.v3';
import { mockAbstractSyncableDTOV3 } from './abstract-syncable.dto.v3.mock';
import { mockVideoDTOV3 } from './video.dto.v3.mock';

export const mockAbstractSensorEventDTOV3 = cookyCutter.define<AbstractSensorEventDTOV3>({
	...mockAbstractSyncableDTOV3(),
	parentSessionUuid: faker.random.uuid(),
	startTime: faker.random.alphaNumeric(12),
	sensorTimeSeconds: faker.date.past().getTime(),
	eventOffset: faker.random.number(1000),
	flagged: faker.random.boolean(),
	hasVideo: faker.random.boolean(),
	rawSensorData: faker.random.alphaNumeric(30),
	hardwareVersionMajor: faker.random.number(9),
	hardwareVersionMinor: faker.random.number(9),
	hardwareSerialNumber: faker.random.alphaNumeric(16),
	firmwareVersion: faker.random.alphaNumeric(6),
	handedness: faker.helpers.randomize<string>(['Righty', 'Lefty']),
	visionVersion: faker.random.alphaNumeric(6),
	analyzerVersion: faker.random.alphaNumeric(6),
	video: mockVideoDTOV3()
});
