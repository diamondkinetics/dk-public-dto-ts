import { AbstractSensorEventResponseV5 } from './abstract-sensor-event.dto.v5';
import { PitchingMetricDtoV5 } from './pitching-metric.dto.v5';
import { CollectionResponseV5 } from './collection.dto.v5';

export interface PitchResponseV5 extends AbstractSensorEventResponseV5 {
	metrics: PitchingMetricDtoV5;
	isGyroSpin: boolean;
	pitchType: string;
	intendedPitchType: string;
	predictedPitchType: string;
}

export interface PitchCollectionResponseV5 extends CollectionResponseV5<PitchResponseV5> {}
