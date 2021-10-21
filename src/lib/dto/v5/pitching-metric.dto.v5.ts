
export  interface PitchingMetricDtoV5 {
	// Release Metrics
	releaseSpeed: number;
	releaseAngle: number;
	releaseSpinRate: number;
	extensionFt: number;
	perceivedSpeedMPH: number;
	releaseHeightFt: number;
	headingAngleDeg: number;

	spinAxisX: number;
	spinAxisY: number;
	spinAxisZ: number;
	spinAxisSensorX: number;
	spinAxisSensorY: number;
	spinAxisSensorZ: number;
	spinAxisRad: number;
	spinEfficiency: number;
	breakForceX: number;
	breakForceY: number;
	breakForceZ: number;
	spinDirection: number;

	// Delivery Metrics
	deliveryOverall: number;
	deliverySetToExtension: number;
	deliveryExtensionToRelease: number;
	deliveryTimeToPlate: number;

	// Effort Metrics
	effortBallForce: number;
	effortBallTorque: number;

	// Flight Metrics
	flightProjectedDistance: number;
	flightHorizontalBreak: number;
	flightVerticalBreak: number;

	// Charting
	locationX: number;
	locationY: number;
	intendedLocationX: number;
	intendedLocationY: number;
}
