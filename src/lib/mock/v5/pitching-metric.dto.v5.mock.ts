import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import { PitchingMetricDTOV5 } from "../../dto";

export const mockPitchingMetricDTOV5 = cookyCutter.define<PitchingMetricDTOV5>({
    releaseSpeed: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    releaseAngle: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    releaseSpinRate: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    extensionFt: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    perceivedSpeedMPH: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    releaseHeightFt: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    headingAngleDeg: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),

    spinAxisX: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    spinAxisY: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    spinAxisZ: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    spinAxisSensorX: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    spinAxisSensorY: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    spinAxisSensorZ: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    spinAxisRad: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    spinEfficiency: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    breakForceX: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    breakForceY: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    breakForceZ: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    spinDirection: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),

    // Delivery Metrics
    deliveryOverall: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    deliverySetToExtension: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    deliveryExtensionToRelease: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    deliveryTimeToPlate: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),

    // Effort Metrics
    effortBallForce: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    effortBallTorque: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),

    // Flight Metrics
    flightProjectedDistance: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    flightHorizontalBreak: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    flightVerticalBreak: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),

    // Charting
    locationX: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    locationY: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    intendedLocationX: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
    intendedLocationY: () => faker.random.number({max: 100, min: 0, precision: 0.00001}),
});