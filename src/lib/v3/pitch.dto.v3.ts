import { PitchType } from '../enum/pitch-type';
import { AbstractSensorEventDTOV3 } from './abstract-sensor-event.dto.v3';

export interface PitchDTOV3 extends AbstractSensorEventDTOV3 {
	releaseSpeed?: number;
	releaseAngle?: number;
	releaseSpinRate?: number;
	extensionFt?: number;
	perceivedSpeedMPH?: number;
	releaseHeightFt?: number;
	headingAngleDeg?: number;
	spinAxisX?: number;
	spinAxisY?: number;
	spinAxisZ?: number;
	spinAxisRad?: number;
	spinEfficiency?: number;
	breakForceX?: number;
	breakForceY?: number;
	breakForceZ?: number;
	isGyroSpin?: boolean;
	spinDirection?: string;
	deliveryOverall?: number;
	deliverySetToExtension?: number;
	deliveryExtensionToRelease?: number;
	deliveryTimeToPlate?: number;
	effortBallForce?: number;
	effortBallTorque?: number;
	zone?: number;
	locationX?: number;
	locationY?: number;
	intendedZone?: number;
	intendedLocationX?: number;
	intendedLocationY?: number;
	pitchType?: PitchType;
	intendedPitchType?: PitchType;
	effort?: string;
	setPosition?: string;
}
