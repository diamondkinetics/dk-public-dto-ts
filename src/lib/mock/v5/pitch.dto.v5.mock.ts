import { define, extend } from 'cooky-cutter';
import { random } from 'faker';

import { AbstractSensorEventResponseV5 } from './../../dto/v5/abstract-sensor-event.dto.v5';
import { PitchCollectionResponseV5, PitchResponseV5 } from './../../dto/v5/pitch.dto.v5';
import { PitchType } from './../../enum/pitch-type';
import { mockAbstractSensorEventResponseV5 } from './abstract-sensor-event.dto.v5.mock';
import { mockCollectionResponseV5 } from './collection.dto.v5.mock';
import { mockPitchingMetricDTOV5 } from './pitching-metric.dto.v5.mock';

export const mockPitchResponseV5 = extend<AbstractSensorEventResponseV5, PitchResponseV5>(
    mockAbstractSensorEventResponseV5,
    {
        metrics: () => mockPitchingMetricDTOV5(),
        isGyroSpin: () => random.boolean(),
        pitchType: PitchType.FASTBALL.getName(),
        intendedPitchType: PitchType.FASTBALL.getName(),
        predictedPitchType: PitchType.FASTBALL.getName()
    }
);

export const mockPitchCollectionResponseV5 = define<PitchCollectionResponseV5>(
    mockCollectionResponseV5<PitchResponseV5>(mockPitchResponseV5)()
);
