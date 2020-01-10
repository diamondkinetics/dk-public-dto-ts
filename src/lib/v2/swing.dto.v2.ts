import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';
import { AnalyzerResultsDTOV2 } from './analyzer-result.dto.v2';
import { MechanicsDTOV2 } from './mechanics.dto.v2';

export interface SwingDTOV2 extends AbstractSyncableDTOV2 {
	battingSessionUuid?: string;
	score: string;
	flagged: boolean;
	hasVideo: boolean;
	startTime: string;
	endTime: string;
	sensorTimeSeconds?: string;
	sensorData?: string;
	rawSensorData: string;
	hardwareVersionMajor: number;
	hardwareVersionMinor: number;
	hardwareSerialNumber: string;
	firmwareVersion: string;
	analyzerResult?: AnalyzerResultsDTOV2;
	mechanics: MechanicsDTOV2[]
}
