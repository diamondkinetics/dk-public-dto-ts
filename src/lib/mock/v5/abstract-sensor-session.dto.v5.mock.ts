import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import { AbstractSensorSessionResponseV5 } from "../../dto";
import { PlayType } from "../../enum";
import { ExtensionType } from "../../enum/extension-type";
import { mockAbstractSensorEventCollectionResponseSummaryV5 } from "./abstract-sensor-event.dto.v5.mock";
import { mockAbstractUserOwnedResponseV5 } from "./abstract-user-owned.dto.v5.mock";

export const mockAbstractSensorSessionResponseV5 = cookyCutter.define<AbstractSensorSessionResponseV5>({
    ...mockAbstractUserOwnedResponseV5(),
    competitionLevelUuid: () => faker.random.uuid(),
    userUuid: () => faker.random.uuid(),
    extensionType: () => ExtensionType.STANDARD.getName(),
    extensionDetails: () => ({}),
    playType: () => faker.helpers.randomize<string>(PlayType.asArray(true).map(pt => pt.getName())),
    notes: () => faker.random.words(),
    events: () => Array.from({length: faker.random.number({max: 15, min: 2, precision: 1}) },
        () => mockAbstractSensorEventCollectionResponseSummaryV5()),
    associatedGroupUuid: () => faker.random.uuid(),
    extensionClass: () => ''
});
