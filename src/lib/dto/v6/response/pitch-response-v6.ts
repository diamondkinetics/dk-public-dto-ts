import { AbstractSensorEventResponseV6 } from './abstract-sensor-event-response-v6';
import { PitchMetricsResponseV6 } from './pitch-metrics-response-v6';

export interface PitchResponseV6 extends AbstractSensorEventResponseV6 {
  metrics?: PitchMetricsResponseV6;
  isGyroSpin?: boolean;
  pitchType?: string;
  intendedPitchType?: string;
  predictedPitchType?: string;
}
