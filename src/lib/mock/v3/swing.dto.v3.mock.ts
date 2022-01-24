import { extend } from 'cooky-cutter';
import { helpers, random } from 'faker';

import { BattingOrientation } from './../../enum/batting-orientation';
import { SwingDTOV3 } from  './../../dto/v3/swing.dto.v3';
import { mockAbstractSensorEventDTOV3 } from './abstract-sensor-event.dto.v3.mock';
import { AbstractSensorEventDTOV3 } from './../../dto/v3/abstract-sensor-event.dto.v3';

export const mockSwingDTOV3 = extend<AbstractSensorEventDTOV3, SwingDTOV3>(mockAbstractSensorEventDTOV3, {
	analyzerResult: () => undefined,
	powerApplied: () => random.number(100),
	powerAccelMax: () => random.number(100),
	powerMomentumImpact: () => random.number(100),
	speedBarrelMax: () => random.number(100),
	speedEfficiency: () => random.number(100),
	speedHandsMax: () => random.number(100),
	quicknessTriggerImpact: () => random.number(100),
	controlApproachAngleImpact: () => random.number(100),
	controlDistanceInTheZone: () => random.number(100),
	controlHandCastMax: () => random.number(100),
	exitDistanceFt: () => random.number(100),
	exitHeadingAngleDeg: () => random.number(100),
	exitLaunchAngleDeg: () => random.number(100),
	exitSpeedMph: () => random.number(100),
	potentialExitDistanceFt: () => random.number(100),
	potentialExitHeadingAngleDeg: () => random.number(100),
	potentialExitLaunchAngleDeg: () => random.number(100),
	potentialExitSpeedMph: () => random.number(100),
	swingPlaneHeadingAngle: () => random.number(100),
	swingPlaneSteepnessAngle: () => random.number(100),
	swingPlaneTiltAngle: () => random.number(100),
	percentageOnSwingPlane: () => random.number(100),
	ballLocationAngle: () => random.number(100),
	impact_loc_x: () => random.number(100),
	impact_loc_y: () => random.number(100),
	impact_loc_z: () => random.number(100),
	slot_dir_x: () => random.number(100),
	slot_dir_y: () => random.number(100),
	slot_dir_z: () => random.number(100),
	impact_velo: () => random.number(100),
	max_dist: () => random.number(100),
	handedness: () => helpers.randomize<string>(BattingOrientation.asArray().map(bo => bo.getName()))
});
