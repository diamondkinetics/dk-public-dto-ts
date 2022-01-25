import { extend } from 'cooky-cutter';
import { helpers, random } from 'faker';

import { AbstractSensorSessionResponseV5 } from './../../dto/v5/abstract-sensor-session.dto.v5';
import { AbstractUserOwnedResponseV5 } from './../../dto/v5/abstract-user-owned.dto.v5';
import { PlayType } from './../../enum/play-type';
import { ExtensionType } from './../../enum/extension-type';
import { mockAbstractSensorEventCollectionResponseSummaryV5 } from './abstract-sensor-event.dto.v5.mock';
import { mockAbstractUserOwnedResponseV5 } from './abstract-user-owned.dto.v5.mock';

export const mockAbstractSensorSessionResponseV5 = extend<AbstractUserOwnedResponseV5, AbstractSensorSessionResponseV5>(
    mockAbstractUserOwnedResponseV5,
    {
        competitionLevelUuid: () => random.uuid(),
        userUuid: () => random.uuid(),
        extensionType: () => ExtensionType.STANDARD.getName(),
        extensionDetails: () => ({}),
        playType: () => helpers.randomize<string>(PlayType.asArray(true).map(pt => pt.getName())),
        notes: () => random.words(),
        events: () => Array.from(
            { length: random.number({ max: 15, min: 2, precision: 1 }) },
            () => mockAbstractSensorEventCollectionResponseSummaryV5()
        ),
        associatedGroupUuid: () => random.uuid(),
        extensionClass: () => ''
    }
);
