import { define } from 'cooky-cutter';
import { random } from 'faker';

import { PitchingMetricDTOV5 } from './../../dto/v5/pitching-metric.dto.v5';

export const mockPitchingMetricDTOV5 = define<PitchingMetricDTOV5>({
    releaseSpeed: () => random.number({max: 100, min: 0, precision: 0.00001}),
    releaseAngle: () => random.number({max: 100, min: 0, precision: 0.00001}),
    releaseSpinRate: () => random.number({max: 100, min: 0, precision: 0.00001}),
    extensionFt: () => random.number({max: 100, min: 0, precision: 0.00001}),
    perceivedSpeedMPH: () => random.number({max: 100, min: 0, precision: 0.00001}),
    releaseHeightFt: () => random.number({max: 100, min: 0, precision: 0.00001}),
    headingAngleDeg: () => random.number({max: 100, min: 0, precision: 0.00001}),

    spinAxisX: () => random.number({max: 100, min: 0, precision: 0.00001}),
    spinAxisY: () => random.number({max: 100, min: 0, precision: 0.00001}),
    spinAxisZ: () => random.number({max: 100, min: 0, precision: 0.00001}),
    spinAxisSensorX: () => random.number({max: 100, min: 0, precision: 0.00001}),
    spinAxisSensorY: () => random.number({max: 100, min: 0, precision: 0.00001}),
    spinAxisSensorZ: () => random.number({max: 100, min: 0, precision: 0.00001}),
    spinAxisRad: () => random.number({max: 100, min: 0, precision: 0.00001}),
    spinEfficiency: () => random.number({max: 100, min: 0, precision: 0.00001}),
    breakForceX: () => random.number({max: 100, min: 0, precision: 0.00001}),
    breakForceY: () => random.number({max: 100, min: 0, precision: 0.00001}),
    breakForceZ: () => random.number({max: 100, min: 0, precision: 0.00001}),
    spinDirection: () => random.number({max: 100, min: 0, precision: 0.00001}),

    // Delivery Metrics
    deliveryOverall: () => random.number({max: 100, min: 0, precision: 0.00001}),
    deliverySetToExtension: () => random.number({max: 100, min: 0, precision: 0.00001}),
    deliveryExtensionToRelease: () => random.number({max: 100, min: 0, precision: 0.00001}),
    deliveryTimeToPlate: () => random.number({max: 100, min: 0, precision: 0.00001}),

    // Effort Metrics
    effortBallForce: () => random.number({max: 100, min: 0, precision: 0.00001}),
    effortBallTorque: () => random.number({max: 100, min: 0, precision: 0.00001}),

    // Flight Metrics
    flightProjectedDistance: () => random.number({max: 100, min: 0, precision: 0.00001}),
    flightHorizontalBreak: () => random.number({max: 100, min: 0, precision: 0.00001}),
    flightVerticalBreak: () => random.number({max: 100, min: 0, precision: 0.00001}),

    // Charting
    locationX: () => random.number({max: 100, min: 0, precision: 0.00001}),
    locationY: () => random.number({max: 100, min: 0, precision: 0.00001}),
    intendedLocationX: () => random.number({max: 100, min: 0, precision: 0.00001}),
    intendedLocationY: () => random.number({max: 100, min: 0, precision: 0.00001}),
});
