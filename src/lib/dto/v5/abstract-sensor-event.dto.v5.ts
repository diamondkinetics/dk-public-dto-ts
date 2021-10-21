import {
	AbstractSyncableCollectionResponseSummaryV5,
	AbstractSyncableResponseV5
} from './abstract-syncable.dto.v5';
import { VideoResponseV5 } from './video.dto.v5';

export interface AbstractSensorEventResponseV5 extends AbstractSyncableResponseV5 {
	parentSessionUuid: string;
	startTime: string;
	sensorTimeSeconds: number;
	flagged: boolean;
	eventOffset: number;
	rawSensorData: string;
	hardwareVersionMajor: number;
	hardwareVersionMinor: number;
	hardwareSerialNumber: string;
	firmwareVersion: string;
	handedness: string;
	analyzerVersion: string;
	video: VideoResponseV5;
}

export interface AbstractSensorEventCollectionResponseSummaryV5 extends AbstractSyncableCollectionResponseSummaryV5 {
	countFlagged: number;
}
