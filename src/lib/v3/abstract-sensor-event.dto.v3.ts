import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';
import { VideoDTOV3 } from './video.dto.v3';

export interface AbstractSensorEventDTOV3 extends AbstractSyncableDTOV3 {
	parentSessionUuid: string;
	startTime: string;
	sensorTimeSeconds: number;
	eventOffset?: number;
	flagged: boolean;
	hasVideo: boolean;
	rawSensorData?: string;
	hardwareVersionMajor?: number;
	hardwareVersionMinor?: number;
	hardwareSerialNumber?: string;
	firmwareVersion?: string;
	handedness?: string;
	visionVersion?: string;
	analyzerVersion?: string;
	video?: VideoDTOV3;
}
