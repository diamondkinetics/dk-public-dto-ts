import { AbstractSensorEventResponseV6 } from './abstract-sensor-event-response-v6';
import { SwingMetricsResponseV6 } from './swing-metrics-response-v6';

export interface SwingResponseV6 extends AbstractSensorEventResponseV6 {
  metrics?: SwingMetricsResponseV6;
  userBatUuid?: string;
}
