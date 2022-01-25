import { define } from 'cooky-cutter';
import { random } from 'faker';

import { SwingMetricDTOV5 } from './../../dto/v5/swing-metric.dto.v5';

export const mockSwingMetricDtoV5 = define<SwingMetricDTOV5>({
    powerApplied: () => random.number({max: 100, min: 0, precision: 0.00001}),
    powerAccelMax: () => random.number({max: 100, min: 0, precision: 0.00001}),
    powerMomentumImpact: () => random.number({max: 100, min: 0, precision: 0.00001}),

    // Speed Metrics
    speedHandsMax: () => random.number({max: 100, min: 0, precision: 0.00001}),
    speedBarrelMax: () => random.number({max: 100, min: 0, precision: 0.00001}),
    speedEfficiency: () => random.number({max: 100, min: 0, precision: 0.00001}),

    // Quickness Metrics
    quicknessTriggerImpact: () => random.number({max: 100, min: 0, precision: 0.00001}),

    // Control Metrics
    controlApproachAngleImpact: () => random.number({max: 100, min: 0, precision: 0.00001}),
    controlHandCastMax: () => random.number({max: 100, min: 0, precision: 0.00001}),
    controlDistanceInTheZone: () => random.number({max: 100, min: 0, precision: 0.00001}),
    controlBatVerticalAngleImpact: () => random.number({max: 100, min: 0, precision: 0.00001}),

    // Outcome Metrics
    exitSpeedMph: () => random.number({max: 100, min: 0, precision: 0.00001}),
    exitDistanceFt: () => random.number({max: 100, min: 0, precision: 0.00001}),
    exitHeadingAngleDeg: () => random.number({max: 100, min: 0, precision: 0.00001}),
    exitLaunchAngleDeg: () => random.number({max: 100, min: 0, precision: 0.00001}),

    // Damage Potential Metrics
    potentialExitSpeedMph: () => random.number({max: 100, min: 0, precision: 0.00001}),
    potentialExitDistanceFt: () => random.number({max: 100, min: 0, precision: 0.00001}),
    potentialExitHeadingAngleDeg: () => random.number({max: 100, min: 0, precision: 0.00001}),
    potentialExitLaunchAngleDeg: () => random.number({max: 100, min: 0, precision: 0.00001}),

    // Dodgers Metrics
    swingPlaneHeadingAngle: () => random.number({max: 100, min: 0, precision: 0.00001}),
    swingPlaneSteepnessAngle: () => random.number({max: 100, min: 0, precision: 0.00001}),
    swingPlaneTiltAngle: () => random.number({max: 100, min: 0, precision: 0.00001}),
    percentageOnSwingPlane: () => random.number({max: 100, min: 0, precision: 0.00001}),
    ballLocationAngle: () => random.number({max: 100, min: 0, precision: 0.00001}),

    impactLocX: () => random.number({max: 100, min: 0, precision: 0.00001}),
    impactLocY: () => random.number({max: 100, min: 0, precision: 0.00001}),
    impactLocZ: () => random.number({max: 100, min: 0, precision: 0.00001}),
    slotDirX: () => random.number({max: 100, min: 0, precision: 0.00001}),
    slotDirY: () => random.number({max: 100, min: 0, precision: 0.00001}),
    slotDirZ: () => random.number({max: 100, min: 0, precision: 0.00001}),
    impactVelo: () => random.number({max: 100, min: 0, precision: 0.00001}),
    maxDist: () => random.number({max: 100, min: 0, precision: 0.00001}),

    pivotAlignmentPercent: () => random.number({max: 100, min: 0, precision: 0.00001}),
    pivotAccelerationRadS: () => random.number({max: 100, min: 0, precision: 0.00001}),
    pivotTiltDeg: () => random.number({max: 100, min: 0, precision: 0.00001}),
});
