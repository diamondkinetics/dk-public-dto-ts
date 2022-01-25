import { define, extend } from 'cooky-cutter';

import { AbstractSensorEventResponseV5 } from './../../dto/v5/abstract-sensor-event.dto.v5';
import { SwingCollectionResponseV5, SwingResponseV5 } from '../../dto/v5/swing.dto.v5';
import { mockAbstractSensorEventResponseV5 } from './abstract-sensor-event.dto.v5.mock';
import { mockCollectionResponseV5 } from './collection.dto.v5.mock';
import { mockSwingMetricDtoV5 } from './swing-metric.dto.v5.mock';

export const mockSwingResponseV5 = extend<AbstractSensorEventResponseV5, SwingResponseV5>(
    mockAbstractSensorEventResponseV5,
    {
        metrics: () => mockSwingMetricDtoV5()
    }
);

export const mockSwingCollectionResponseV5 = define<SwingCollectionResponseV5>(
    mockCollectionResponseV5<SwingResponseV5>(mockSwingResponseV5)()
);
