
export interface SwingMetricDtoV5 {
	// Power Metrics
	powerApplied: number;
	powerAccelMax: number;
	powerMomentumImpact: number;

	// Speed Metrics
	speedHandsMax: number;
	speedBarrelMax: number;
	speedEfficiency: number;

	// Quickness Metrics
	quicknessTriggerImpact: number;

	// Control Metrics
	controlApproachAngleImpact: number;
	controlHandCastMax: number;
	controlDistanceInTheZone: number;
	controlBatVerticalAngleImpact: number;

	// Outcome Metrics
	exitSpeedMph: number;
	exitDistanceFt: number;
	exitHeadingAngleDeg: number;
	exitLaunchAngleDeg: number;

	// Damage Potential Metrics
	potentialExitSpeedMph: number;
	potentialExitDistanceFt: number;
	potentialExitHeadingAngleDeg: number;
	potentialExitLaunchAngleDeg: number;

	// Dodgers Metrics
	swingPlaneHeadingAngle: number;
	swingPlaneSteepnessAngle: number;
	swingPlaneTiltAngle: number;
	percentageOnSwingPlane: number;
	ballLocationAngle: number;

	impactLocX: number;
	impactLocY: number;
	impactLocZ: number;
	slotDirX: number;
	slotDirY: number;
	slotDirZ: number;
	impactVelo: number;
	maxDist: number;

	pivotAlignmentPercent: number;
	pivotAccelerationRadS: number;
	pivotTiltDeg: number;
}
