export class HittingMetric {

	public static readonly POWER_BAT_AVERAGE = new HittingMetric(
		'POWER_BAT_AVERAGE',
		'Applied Swing Power',
		'powerApplied',
		'WATTS',
		'powerBatAvgUpperBound');
	public static readonly POWER_BAT_ACCEL_MAX = new HittingMetric(
		'POWER_BAT_ACCEL_MAX',
		'Max Acceleration',
		'powerAccelMax',
		'G',
		'powerBatCOMAccelMaxUpperBound');
	public static readonly POWER_BAT_MOMENTUM = new HittingMetric(
		'POWER_BAT_MOMENTUM',
		'Impact Momentum',
		'powerMomentumImpact',
		'KG-M/SEC',
		'powerBatMomentumImpactUpperBound');
	public static readonly SPEED_HANDS_MAX = new HittingMetric(
		'SPEED_HANDS_MAX',
		'Max Hand Speed',
		'speedHandsMax',
		'MPH',
		'speedHandsMaxUpperBound');
	public static readonly SPEED_BAT_BARREL_MAX = new HittingMetric(
		'SPEED_BAT_BARREL_MAX',
		'Max Barrel Speed',
		'speedBarrelMax',
		'MPH',
		'speedBatBarrelMaxUpperBound');
	public static readonly SPEED_IMPACT_EFFICIENCY = new HittingMetric(
		'SPEED_IMPACT_EFFICIENCY',
		'Speed Efficiency',
		'speedEfficiency',
		'%',
		'speedBatTimeImpactMaxUpperBound');
	public static readonly QUICKNESS_BAT_TTI = new HittingMetric(
		'QUICKNESS_BAT_TTI',
		'Trigger To Impact',
		'quicknessTriggerImpact',
		'MSEC',
		'quicknessBatTimeTriggerImpactLowerBound');
	public static readonly CONTROL_BAT_APPROACH_ANGLE = new HittingMetric(
		'CONTROL_BAT_APPROACH_ANGLE',
		'Attack Angle',
		'controlApproachAngleImpact',
		'DEG',
		'controlBatApproachAngleImpactUpperBound');
	public static readonly CONTROL_HANDS_CASTING = new HittingMetric(
		'CONTROL_HANDS_CASTING',
		'Hand Cast',
		'controlHandCastMax',
		'IN',
		'controlHandsDistanceAwayMaxUpperBound');
	public static readonly CONTROL_BAT_TO_PITCHER = new HittingMetric(
		'CONTROL_BAT_TO_PITCHER',
		'Distance In The Zone',
		'controlDistanceInTheZone',
		'IN',
		'controlBatDistanceTraveledTowardPitcherUpperBound');
	public static readonly CONTROL_BAT_VERTICAL_ANGLE = new HittingMetric(
		'CONTROL_BAT_VERTICAL_ANGLE',
		'Vertical Bat Angle',
		'controlBatVerticalAngleImpact',
		'DEG',
		'controlBatVerticalAngleImpactUpperBound');

	constructor(
		private readonly key: string,
		private readonly name: string,
		private readonly propertyName: string,
		private readonly unit: string,
		private readonly populationDataProperty: string
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

	public getUnit(): string {
		return this.unit;
	}

	public getPopulationDataProperty(): string {
		return this.populationDataProperty;
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
		return HittingMetric.asArray().find(m => m.key === key);
	}

	public static isHittingMetric(metric: any): metric is HittingMetric {
		return true;
	}

}
