import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import { SwingMetricDTOV5 } from "../../dto";

export const mockSwingMetricDtoV5 = cookyCutter.define<SwingMetricDTOV5>({
    powerApplied: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    powerAccelMax: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    powerMomentumImpact: faker.random.number({max: 100, min: 0, precision: 0.00001}),

    // Speed Metrics
    speedHandsMax: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    speedBarrelMax: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    speedEfficiency: faker.random.number({max: 100, min: 0, precision: 0.00001}),

    // Quickness Metrics
    quicknessTriggerImpact: faker.random.number({max: 100, min: 0, precision: 0.00001}),

    // Control Metrics
    controlApproachAngleImpact: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    controlHandCastMax: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    controlDistanceInTheZone: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    controlBatVerticalAngleImpact: faker.random.number({max: 100, min: 0, precision: 0.00001}),

    // Outcome Metrics
    exitSpeedMph: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    exitDistanceFt: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    exitHeadingAngleDeg: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    exitLaunchAngleDeg: faker.random.number({max: 100, min: 0, precision: 0.00001}),

    // Damage Potential Metrics
    potentialExitSpeedMph: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    potentialExitDistanceFt: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    potentialExitHeadingAngleDeg: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    potentialExitLaunchAngleDeg: faker.random.number({max: 100, min: 0, precision: 0.00001}),

    // Dodgers Metrics
    swingPlaneHeadingAngle: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    swingPlaneSteepnessAngle: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    swingPlaneTiltAngle: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    percentageOnSwingPlane: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    ballLocationAngle: faker.random.number({max: 100, min: 0, precision: 0.00001}),

    impactLocX: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    impactLocY: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    impactLocZ: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    slotDirX: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    slotDirY: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    slotDirZ: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    impactVelo: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    maxDist: faker.random.number({max: 100, min: 0, precision: 0.00001}),

    pivotAlignmentPercent: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    pivotAccelerationRadS: faker.random.number({max: 100, min: 0, precision: 0.00001}),
    pivotTiltDeg: faker.random.number({max: 100, min: 0, precision: 0.00001}),
});