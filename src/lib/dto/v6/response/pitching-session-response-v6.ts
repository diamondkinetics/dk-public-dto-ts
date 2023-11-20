import { AbstractSensorSessionResponseV6 } from './abstract-sensor-session-response-v6';

export interface PitchingSessionResponseV6 extends AbstractSensorSessionResponseV6 {
  name?: string;
  flagged?: boolean;
  searchable?: boolean;
}
