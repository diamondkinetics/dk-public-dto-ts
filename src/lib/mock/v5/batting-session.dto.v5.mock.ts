import { define, extend } from 'cooky-cutter';
import { random } from 'faker';

import { AbstractSensorSessionResponseV5 } from './../../dto/v5/abstract-sensor-session.dto.v5';
import { BattingSessionCollectionResponseV5, BattingSessionResponseV5 } from './../../dto/v5/batting-session.dto.v5';
import { mockAbstractSensorSessionResponseV5 } from './abstract-sensor-session.dto.v5.mock';
import { mockCollectionResponseV5 } from './collection.dto.v5.mock';

export const mockBattingSessionResponseV5 = extend<AbstractSensorSessionResponseV5, BattingSessionResponseV5>(
    mockAbstractSensorSessionResponseV5,
    {
        userBatUuid: () => random.uuid()
    }
);

export const mockBattingSessionCollectionResponseV5 = define<BattingSessionCollectionResponseV5>(
    mockCollectionResponseV5<BattingSessionResponseV5>(mockBattingSessionResponseV5)()
);
