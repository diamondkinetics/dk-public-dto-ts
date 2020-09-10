import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';

export interface PopulationDataDTOV3 extends AbstractSyncableDTOV3 {
	competitionLevelUuid?: string;
	playType?: string;

	// Power Metrics Bounds
	powerBatAvgLowerBound?: number;
	powerBatAvgUpperBound?: number;
	powerBatCOMAccelMaxLowerBound?: number;
	powerBatCOMAccelMaxUpperBound?: number;
	powerBatMomentumImpactLowerBound?: number;
	powerBatMomentumImpactUpperBound?: number;

	// Speed Metrics Bounds
	speedHandsMaxLowerBound?: number;
	speedHandsMaxUpperBound?: number;
	speedBatBarrelMaxLowerBound?: number;
	speedBatBarrelMaxUpperBound?: number;
	speedBatTimeImpactMaxLowerBound?: number;
	speedBatTimeImpactMaxUpperBound?: number;

	// Quickness Metrics Bounds
	quicknessBatTimeTriggerImpactLowerBound?: number;
	quicknessBatTimeTriggerImpactUpperBound?: number;

	// Control Metrics Bounds
	controlBatApproachAngleImpactLowerBound?: number;
	controlBatApproachAngleImpactUpperBound?: number;
	controlHandsDistanceAwayMaxLowerBound?: number;
	controlHandsDistanceAwayMaxUpperBound?: number;
	controlBatDistanceTraveledTowardPitcherLowerBound?: number;
	controlBatDistanceTraveledTowardPitcherUpperBound?: number;

	// Other Bounds
	exitSpeedMphLowerBound?: number;
	exitSpeedMphUpperBound?: number;
	exitHeadingAngleDegLowerBound?: number;
	exitHeadingAngleDegUpperBound?: number;
	exitDistanceFtLowerBound?: number;
	exitDistanceFtUpperBound?: number;
	exitLaunchAngleDegLowerBound?: number;
	exitLaunchAngleDegUpperBound?: number;

	potentialExitSpeedMphLowerBound?: number;
	potentialExitSpeedMphUpperBound?: number;
	potentialExitDistanceFtLowerBound?: number;
	potentialExitDistanceFtUpperBound?: number;
	potentialExitHeadingAngleDegLowerBound?: number;
	potentialExitHeadingAngleDegUpperBound?: number;
	potentialExitLaunchAngleDegLowerBound?: number;
	potentialExitLaunchAngleDegUpperBound?: number;

	swingPlaneHeadingAngleLowerBound?: number;
	swingPlaneHeadingAngleUpperBound?: number;
	swingPlaneSteepnessAngleLowerBound?: number;
	swingPlaneSteepnessAngleUpperBound?: number;
	swingPlaneTiltAngleLowerBound?: number;
	swingPlaneTiltAngleUpperBound?: number;
	percentageOnSwingPlaneLowerBound?: number;
	percentageOnSwingPlaneUpperBound?: number;
	ballLocationAngleLowerBound?: number;
	ballLocationAngleUpperBound?: number;
}
