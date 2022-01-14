import * as cookyCutter from 'cooky-cutter';
import { SwingCollectionResponseV5, SwingResponseV5 } from "../../dto";
import { mockAbstractSensorEventResponseV5 } from "./abstract-sensor-event.dto.v5.mock";
import { mockCollectionResponseV5 } from "./collection.dto.v5.mock";
import { mockSwingMetricDtoV5 } from "./swing-metric.dto.v5.mock";

export const mockSwingResponseV5 = cookyCutter.define<SwingResponseV5>({
    ...mockAbstractSensorEventResponseV5(),
    metrics: () => mockSwingMetricDtoV5()
});

export const mockSwingCollectionResponseV5 = cookyCutter.define<SwingCollectionResponseV5>({
    ...mockCollectionResponseV5<SwingResponseV5>(mockSwingResponseV5)()
});