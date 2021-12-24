import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import { AbstractSensorEventCollectionResponseSummaryV5, AbstractSensorEventResponseV5 } from "../../dto";
import {
    mockAbstractSyncableCollectionResponseSummaryV5,
    mockAbstractSyncableResponseV5
} from "./abstract-syncable.dto.v5.mock";
import { mockVideoResponseV5 } from "./video.dto.v5.mock";

export const mockAbstractSensorEventResponseV5 = cookyCutter.define<AbstractSensorEventResponseV5>({
    ...mockAbstractSyncableResponseV5(),
    parentSessionUuid: faker.random.uuid(),
    startTime: faker.random.alphaNumeric(12),
    sensorTimeSeconds: faker.date.past().getTime(),
    flagged: faker.random.boolean(),
    eventOffset: faker.random.number(1000),
    rawSensorData: faker.random.alphaNumeric(30),
    hardwareVersionMajor: faker.random.number(9),
    hardwareVersionMinor: faker.random.number(9),
    hardwareSerialNumber: faker.random.alphaNumeric(16),
    firmwareVersion: faker.random.alphaNumeric(6),
    handedness: faker.helpers.randomize<string>(['Righty', 'Lefty']),
    analyzerVersion: faker.random.alphaNumeric(6),
    video: mockVideoResponseV5()
});

export const mockAbstractSensorEventCollectionResponseSummaryV5 = cookyCutter.define<AbstractSensorEventCollectionResponseSummaryV5>({
   ...mockAbstractSyncableCollectionResponseSummaryV5(),
   countFlagged: faker.random.number(10)
})
