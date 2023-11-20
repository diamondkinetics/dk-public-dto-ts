import { AbstractSensorSessionResponseV6 } from './abstract-sensor-session-response-v6';

export interface BattingSessionResponseV6 extends AbstractSensorSessionResponseV6 {
  userBatUuid?: string;
}
