import { AbstractSensorEventResponseV5 } from './abstract-sensor-event.dto.v5';
import { CollectionResponseV5 } from './collection.dto.v5';
import { SwingMetricDTOV5 } from './swing-metric.dto.v5';

export  interface SwingResponseV5 extends AbstractSensorEventResponseV5 {
	metrics: SwingMetricDTOV5;
}

export interface SwingCollectionResponseV5 extends CollectionResponseV5<SwingResponseV5> {}
