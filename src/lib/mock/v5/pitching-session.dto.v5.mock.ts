import { define, extend } from 'cooky-cutter';
import { random } from 'faker';

import { AbstractSensorSessionResponseV5 } from './../../dto/v5/abstract-sensor-session.dto.v5';
import { PitchingSessionCollectionResponseV5, PitchingSessionResponseV5 } from './../../dto/v5/pitching-session.dto.v5';
import { mockAbstractSensorSessionResponseV5 } from './abstract-sensor-session.dto.v5.mock';
import { mockCollectionResponseV5 } from './collection.dto.v5.mock';

export const mockPitchingSessionResponseV5 = extend<AbstractSensorSessionResponseV5, PitchingSessionResponseV5>(
    mockAbstractSensorSessionResponseV5,
    {
        name: () => random.word(),
        flagged: () => random.boolean(),
        searchable: () => random.boolean()
    }
);

export const mockPitchingSessionCollectionResponseV5 = define<PitchingSessionCollectionResponseV5>(
    mockCollectionResponseV5<PitchingSessionResponseV5>(mockPitchingSessionResponseV5)()
);
