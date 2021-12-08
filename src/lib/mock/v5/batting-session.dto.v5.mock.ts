import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import { BattingSessionCollectionResponseV5, BattingSessionResponseV5 } from "../../dto";
import { mockAbstractSensorSessionResponseV5 } from "./abstract-sensor-session.dto.v5.mock";
import { mockCollectionResponseV5 } from "./collection.dto.v5.mock";

export const mockBattingSessionResponseV5 = cookyCutter.define<BattingSessionResponseV5>({
    ...mockAbstractSensorSessionResponseV5(),
    userBatUuid: faker.random.uuid()
});

export const mockBattingSessionCollectionResponseV5 = cookyCutter.define<BattingSessionCollectionResponseV5>({
    ...mockCollectionResponseV5<BattingSessionResponseV5>(mockBattingSessionResponseV5)()
});