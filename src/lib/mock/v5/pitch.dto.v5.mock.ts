import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import { PitchCollectionResponseV5, PitchResponseV5 } from "../../dto";
import { PitchType } from "../../enum";
import { mockAbstractSensorEventResponseV5 } from "./abstract-sensor-event.dto.v5.mock";
import { mockCollectionResponseV5 } from "./collection.dto.v5.mock";
import { mockPitchingMetricDTOV5 } from "./pitching-metric.dto.v5.mock";

export const mockPitchResponseV5 = cookyCutter.define<PitchResponseV5>({
    ...mockAbstractSensorEventResponseV5(),
    metrics: () => mockPitchingMetricDTOV5(),
    isGyroSpin: faker.random.boolean(),
    pitchType: PitchType.FASTBALL.getName(),
    intendedPitchType: PitchType.FASTBALL.getName(),
    predictedPitchType: PitchType.FASTBALL.getName()
});

export const mockPitchCollectionResponseV5 = cookyCutter.define<PitchCollectionResponseV5>({
    ...mockCollectionResponseV5<PitchResponseV5>(mockPitchResponseV5)()
});
