import { extend } from 'cooky-cutter';
import { date, helpers, random } from 'faker';

import {
    AbstractSyncableCollectionResponseSummaryV5,
    AbstractSyncableResponseV5
} from './../../dto/v5/abstract-syncable.dto.v5';
import {
    AbstractSensorEventCollectionResponseSummaryV5,
    AbstractSensorEventResponseV5
} from './../../dto/v5/abstract-sensor-event.dto.v5';
import { BattingOrientation } from './../../enum/batting-orientation';
import {
    mockAbstractSyncableCollectionResponseSummaryV5,
    mockAbstractSyncableResponseV5
} from './abstract-syncable.dto.v5.mock';
import { mockVideoResponseV5 } from './video.dto.v5.mock';

export const mockAbstractSensorEventResponseV5 = extend<AbstractSyncableResponseV5, AbstractSensorEventResponseV5>(
    mockAbstractSyncableResponseV5,
    {
        parentSessionUuid: () => random.uuid(),
        startTime: () => random.alphaNumeric(12),
        sensorTimeSeconds: () => date.past().getTime(),
        flagged: () => random.boolean(),
        eventOffset: () => random.number(1000),
        rawSensorData: () => random.alphaNumeric(30),
        hardwareVersionMajor: () => random.number(9),
        hardwareVersionMinor: () => random.number(9),
        hardwareSerialNumber: () => random.alphaNumeric(16),
        firmwareVersion: () => random.alphaNumeric(6),
        handedness: () => helpers.randomize(BattingOrientation.asArray(true).map(bo => bo.getName())),
        analyzerVersion: () => random.alphaNumeric(6),
        video: () => mockVideoResponseV5()
    }
);

export const mockAbstractSensorEventCollectionResponseSummaryV5 = extend<
    AbstractSyncableCollectionResponseSummaryV5,
    AbstractSensorEventCollectionResponseSummaryV5
>(
    mockAbstractSyncableCollectionResponseSummaryV5,
    {
        countFlagged: () => random.number(10)
    }
);
