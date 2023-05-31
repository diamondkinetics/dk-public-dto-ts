import { Metric } from './metric';
import { PlayType } from './play-type';

export class HittingMetric implements Metric {

	public static readonly POWER_BAT_AVERAGE = new HittingMetric(
		'POWER_BAT_AVERAGE',
		'Applied Swing Power',
		'powerApplied',
		'powerBatAvgUpperBound',
		[PlayType.BASEBALL, PlayType.FAST_PITCH_SOFTBALL],
		true,
		'WATTS');

	public static readonly POWER_BAT_ACCEL_MAX = new HittingMetric(
		'POWER_BAT_ACCEL_MAX',
		'Max Acceleration',
		'powerAccelMax',
		'powerBatCOMAccelMaxUpperBound',
		[PlayType.BASEBALL, PlayType.FAST_PITCH_SOFTBALL],
		true,
		'G');

	public static readonly POWER_BAT_MOMENTUM = new HittingMetric(
		'POWER_BAT_MOMENTUM',
		'Impact Momentum',
		'powerMomentumImpact',
		'powerBatMomentumImpactUpperBound',
		[PlayType.BASEBALL, PlayType.FAST_PITCH_SOFTBALL],
		false,
		'KG-M/SEC');

	public static readonly SPEED_HANDS_MAX = new HittingMetric(
		'SPEED_HANDS_MAX',
		'Max Hand Speed',
		'speedHandsMax',
		'speedHandsMaxUpperBound',
		[PlayType.BASEBALL, PlayType.FAST_PITCH_SOFTBALL],
		true,
		'MPH');

	public static readonly SPEED_BAT_BARREL_MAX = new HittingMetric(
		'SPEED_BAT_BARREL_MAX',
		'Max Barrel Speed',
		'speedBarrelMax',
		'speedBatBarrelMaxUpperBound',
		[PlayType.BASEBALL, PlayType.FAST_PITCH_SOFTBALL],
		false,
		'MPH');

	public static readonly SPEED_IMPACT_EFFICIENCY = new HittingMetric(
		'SPEED_IMPACT_EFFICIENCY',
		'Speed Efficiency',
		'speedEfficiency',
		'speedBatTimeImpactMaxUpperBound',
		[PlayType.BASEBALL, PlayType.FAST_PITCH_SOFTBALL],
		true,
		'%');

	public static readonly QUICKNESS_BAT_TTI = new HittingMetric(
		'QUICKNESS_BAT_TTI',
		'Trigger To Impact',
		'quicknessTriggerImpact',
		'quicknessBatTimeTriggerImpactLowerBound',
		[PlayType.BASEBALL, PlayType.FAST_PITCH_SOFTBALL],
		false,
		'MSEC');

	public static readonly CONTROL_BAT_APPROACH_ANGLE = new HittingMetric(
		'CONTROL_BAT_APPROACH_ANGLE',
		'Attack Angle',
		'controlApproachAngleImpact',
		'controlBatApproachAngleImpactUpperBound',
		[PlayType.BASEBALL, PlayType.FAST_PITCH_SOFTBALL],
		false,
		'DEG');

	public static readonly CONTROL_HANDS_CASTING = new HittingMetric(
		'CONTROL_HANDS_CASTING',
		'Hand Cast',
		'controlHandCastMax',
		'controlHandsDistanceAwayMaxUpperBound',
		[PlayType.BASEBALL, PlayType.FAST_PITCH_SOFTBALL],
		true,
		'IN');

	public static readonly CONTROL_BAT_TO_PITCHER = new HittingMetric(
		'CONTROL_BAT_TO_PITCHER',
		'Distance In The Zone',
		'controlDistanceInTheZone',
		'controlBatDistanceTraveledTowardPitcherUpperBound',
		[PlayType.BASEBALL, PlayType.FAST_PITCH_SOFTBALL],
		true,
		'IN');

	public static readonly CONTROL_BAT_VERTICAL_ANGLE = new HittingMetric(
		'CONTROL_BAT_VERTICAL_ANGLE',
		'Vertical Bat Angle',
		'controlBatVerticalAngleImpact',
		'controlBatVerticalAngleImpactUpperBound',
		[PlayType.BASEBALL, PlayType.FAST_PITCH_SOFTBALL],
		true,
		'DEG');

	constructor(
		private readonly key: string,
		private readonly name: string,
		private readonly propertyName: string,
		private readonly populationDataProperty: string,
		private readonly playTypes: PlayType[],
		private readonly subscriptionRequired: boolean,
		private readonly unit?: string
	) {}

	public getKey(): string {
		return this.key;
	}

	public getName(): string {
		return this.name;
	}

	public getPropertyName(): string {
		return this.propertyName;
	}

	public getUnit(): string | undefined {
		return this.unit;
	}

	public getPopulationDataProperty(): string {
		return this.populationDataProperty;
	}

	public getPlayTypes(): PlayType[] {
		return this.playTypes;
	}

	public isSubscriptionRequired(): boolean {
		return this.subscriptionRequired;
	}

	public static asArray() {
		return [
			HittingMetric.SPEED_BAT_BARREL_MAX,
			HittingMetric.SPEED_HANDS_MAX,
			HittingMetric.CONTROL_BAT_APPROACH_ANGLE,
			HittingMetric.CONTROL_BAT_TO_PITCHER,
			HittingMetric.POWER_BAT_AVERAGE,
			HittingMetric.POWER_BAT_ACCEL_MAX,
			HittingMetric.POWER_BAT_MOMENTUM,
			HittingMetric.SPEED_IMPACT_EFFICIENCY,
			HittingMetric.QUICKNESS_BAT_TTI,
			HittingMetric.CONTROL_HANDS_CASTING,
			HittingMetric.CONTROL_BAT_VERTICAL_ANGLE
		];
	}

	public static byKey(key: string): HittingMetric | undefined {
		return HittingMetric.asArray().find(m => m.getKey() === key);
	}

	public static isHittingMetric(metric: any): metric is HittingMetric {
		return true;
	}
}
