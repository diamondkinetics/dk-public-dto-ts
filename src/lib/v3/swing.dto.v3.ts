import { SwingAnalyzerResultDTOV2 } from '../v2/swing-analyzer-result.dto.v2';
import { AbstractSensorEventDTOV3 } from './abstract-sensor-event.dto.v3';

export interface SwingDTOV3 extends AbstractSensorEventDTOV3 {
	analyzerResult?: SwingAnalyzerResultDTOV2;
	powerApplied?: number;
	powerAccelMax?: number;
	powerMomentumImpact?: number;
	speedHandsMax?: number;
	speedBarrelMax?: number;
	speedEfficiency?: number;
	quicknessTriggerImpact?: number;
	controlApproachAngleImpact?: number;
	controlHandCastMax?: number;
	controlDistanceInTheZone?: number;
	exitSpeedMph?: number;
	exitDistanceFt?: number;
	exitHeadingAngleDeg?: number;
	exitLaunchAngleDeg?: number;
	potentialExitSpeedMph?: number;
	potentialExitDistanceFt?: number;
	potentialExitHeadingAngleDeg?: number;
	potentialExitLaunchAngleDeg?: number;
	swingPlaneHeadingAngle?: number;
	swingPlaneSteepnessAngle?: number;
	swingPlaneTiltAngle?: number;
	percentageOnSwingPlane?: number;
	ballLocationAngle?: number;
	impact_loc_x?: number;
	impact_loc_y?: number;
	impact_loc_z?: number;
	slot_dir_x?: number;
	slot_dir_y?: number;
	slot_dir_z?: number;
	impact_velo?: number;
	max_dist?: number;
}
