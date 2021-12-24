import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import { PitchingSessionCollectionResponseV5, PitchingSessionResponseV5 } from "../../dto";
import { mockAbstractSensorSessionResponseV5 } from "./abstract-sensor-session.dto.v5.mock";
import { mockCollectionResponseV5 } from "./collection.dto.v5.mock";

export const mockPitchingSessionResponseV5 = cookyCutter.define<PitchingSessionResponseV5>({
    ...mockAbstractSensorSessionResponseV5(),
    name: faker.random.word(),
    flagged: faker.random.boolean(),
    searchable: faker.random.boolean()
});

export const mockPitchingSessionCollectionResponseV5 = cookyCutter.define<PitchingSessionCollectionResponseV5>({
    ...mockCollectionResponseV5<PitchingSessionResponseV5>(mockPitchingSessionResponseV5)()
});
