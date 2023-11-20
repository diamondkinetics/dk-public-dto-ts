import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';
import { VideoResponseV6 } from './video-response-v6';

export interface AbstractSensorEventResponseV6 extends AbstractSyncableResponseV6 {
  parentSessionUuid: string;
  startTime?: string;
  sensorTimeSeconds?: number;
  flagged: boolean;
  eventOffset?: number;
  rawSensorData?: string;
  hardwareVersionMajor?: number;
  hardwareVersionMinor?: number;
  firmwareVersion?: string;
  handedness?: string;
  analyzerVersion?: string;
  video?: VideoResponseV6;
}
