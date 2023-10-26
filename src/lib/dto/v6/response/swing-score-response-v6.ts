import { AbstractUserOwnedResponseV6 } from './abstract-user-owned-response-v6';

export interface SwingScoreResponseV6 extends AbstractUserOwnedResponseV6 {
  swingBucket: number;
  firstSwingDateTime: string;
  lastSwingDateTime: string;
  totalScore: number;
  powerScore: number;
  appliedPowerScore: number;
  maxAccelerationScore: number;
  impactMomentumScore: number;
  speedScore: number;
  maxBarrelSpeedScore: number;
  speedEfficiencyScore: number;
  maxHandSpeedScore: number;
  controlScore: number;
  attackAngleScore: number;
  handCastDistanceScore: number;
  distanceInTheZoneScore: number;
  quicknessScore: number;
  averageAttackAngle: number;
  averageHandCast: number;
  averageDistanceInTheZone: number;
  averageImpactMomentum: number;
  averageMaxAcceleration: number;
  averageAppliedPower: number;
  averageTriggerToImpact: number;
  averageMaxBarrelSpeed: number;
  averageMaxHandSpeed: number;
}
