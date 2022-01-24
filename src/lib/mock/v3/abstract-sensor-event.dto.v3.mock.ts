import { extend } from 'cooky-cutter';
import { date, helpers, random } from 'faker';

import { BattingOrientation } from './../../enum/batting-orientation';
import { AbstractSyncableDTOV3 } from './../../dto/v3/abstract-syncable.dto.v3';
import { AbstractSensorEventDTOV3 } from './../../dto/v3/abstract-sensor-event.dto.v3';
import { mockAbstractSyncableDTOV3 } from './abstract-syncable.dto.v3.mock';
import { mockVideoDTOV3 } from './video.dto.v3.mock';

export const mockAbstractSensorEventDTOV3 = extend<AbstractSyncableDTOV3, AbstractSensorEventDTOV3>(
	mockAbstractSyncableDTOV3,
	{
		parentSessionUuid: () => random.uuid(),
		startTime: () => random.alphaNumeric(12),
		sensorTimeSeconds: () => date.past().getTime(),
		eventOffset: () => random.number(1000),
		flagged: () => random.boolean(),
		hasVideo: () => random.boolean(),
		rawSensorData: () => random.alphaNumeric(30),
		hardwareVersionMajor: () => random.number(9),
		hardwareVersionMinor: () => random.number(9),
		hardwareSerialNumber: () => random.alphaNumeric(16),
		firmwareVersion: () => random.alphaNumeric(6),
		handedness: () => helpers.randomize<string>(BattingOrientation.asArray(true).map(bo => bo.getName())),
		visionVersion: () => random.alphaNumeric(6),
		analyzerVersion: () => random.alphaNumeric(6),
		video: () => mockVideoDTOV3()
	}
);
