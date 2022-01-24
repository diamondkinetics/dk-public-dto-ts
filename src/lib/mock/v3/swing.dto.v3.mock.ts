import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import { BattingOrientation } from 'src/lib/enum';

import { SwingDTOV3 } from  './../../dto/v3/swing.dto.v3';
import { mockAbstractSensorEventDTOV3 } from './abstract-sensor-event.dto.v3.mock';

export const mockSwingDTOV3 = cookyCutter.define<SwingDTOV3>({
	...mockAbstractSensorEventDTOV3(),
	analyzerResult: () => undefined,
	powerApplied: () => faker.random.number(100),
	powerAccelMax: () => faker.random.number(100),
	powerMomentumImpact: () => faker.random.number(100),
	speedBarrelMax: () => faker.random.number(100),
	speedEfficiency: () => faker.random.number(100),
	speedHandsMax: () => faker.random.number(100),
	quicknessTriggerImpact: () => faker.random.number(100),
	controlApproachAngleImpact: () => faker.random.number(100),
	controlDistanceInTheZone: () => faker.random.number(100),
	controlHandCastMax: () => faker.random.number(100),
	exitDistanceFt: () => faker.random.number(100),
	exitHeadingAngleDeg: () => faker.random.number(100),
	exitLaunchAngleDeg: () => faker.random.number(100),
	exitSpeedMph: () => faker.random.number(100),
	potentialExitDistanceFt: () => faker.random.number(100),
	potentialExitHeadingAngleDeg: () => faker.random.number(100),
	potentialExitLaunchAngleDeg: () => faker.random.number(100),
	potentialExitSpeedMph: () => faker.random.number(100),
	swingPlaneHeadingAngle: () => faker.random.number(100),
	swingPlaneSteepnessAngle: () => faker.random.number(100),
	swingPlaneTiltAngle: () => faker.random.number(100),
	percentageOnSwingPlane: () => faker.random.number(100),
	ballLocationAngle: () => faker.random.number(100),
	impact_loc_x: () => faker.random.number(100),
	impact_loc_y: () => faker.random.number(100),
	impact_loc_z: () => faker.random.number(100),
	slot_dir_x: () => faker.random.number(100),
	slot_dir_y: () => faker.random.number(100),
	slot_dir_z: () => faker.random.number(100),
	impact_velo: () => faker.random.number(100),
	max_dist: () => faker.random.number(100),
	handedness: () => faker.helpers.randomize<string>(BattingOrientation.asArray().map(bo => bo.getName()))
});
