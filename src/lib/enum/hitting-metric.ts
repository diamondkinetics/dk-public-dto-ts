export class HittingMetric {

	constructor(
		public readonly key: string,
		public readonly name: string,
		public readonly propertyName: string,
		public readonly unit: string,
		public readonly populationDataProperty: string)
	{}

	static readonly POWER_BAT_AVERAGE = new HittingMetric(
		'POWER_BAT_AVERAGE',
		'Applied Swing Power',
		'powerApplied',
		'WATTS',
		'powerBatAvgUpperBound');
	static readonly POWER_BAT_ACCEL_MAX = new HittingMetric(
		'POWER_BAT_ACCEL_MAX',
		'Max Acceleration',
		'powerAccelMax',
		'G',
		'powerBatCOMAccelMaxUpperBound');
	static readonly POWER_BAT_MOMENTUM = new HittingMetric(
		'POWER_BAT_MOMENTUM',
		'Impact Momentum',
		'powerMomentumImpact',
		'KG-M/SEC',
		'powerBatMomentumImpactUpperBound');
	static readonly SPEED_HANDS_MAX = new HittingMetric(
		'SPEED_HANDS_MAX',
		'Max Hand Speed',
		'speedHandsMax',
		'MPH',
		'speedHandsMaxUpperBound');
	static readonly SPEED_BAT_BARREL_MAX = new HittingMetric(
		'SPEED_BAT_BARREL_MAX',
		'Max Barrel Speed',
		'speedBarrelMax',
		'MPH',
		'speedBatBarrelMaxUpperBound');
	static readonly SPEED_IMPACT_EFFICIENCY = new HittingMetric(
		'SPEED_IMPACT_EFFICIENCY',
		'Speed Efficiency',
		'speedEfficiency',
		'%',
		'speedBatTimeImpactMaxUpperBound');
	static readonly QUICKNESS_BAT_TTI = new HittingMetric(
		'QUICKNESS_BAT_TTI',
		'Trigger To Impact',
		'quicknessTriggerImpact',
		'MSEC',
		'quicknessBatTimeTriggerImpactLowerBound');
	static readonly CONTROL_BAT_APPROACH_ANGLE = new HittingMetric(
		'CONTROL_BAT_APPROACH_ANGLE',
		'Approach Angle',
		'controlApproachAngleImpact',
		'DEG',
		'controlBatApproachAngleImpactUpperBound');
	static readonly CONTROL_HANDS_CASTING = new HittingMetric(
		'CONTROL_HANDS_CASTING',
		'Hand Cast',
		'controlHandCastMax',
		'IN',
		'controlHandsDistanceAwayMaxUpperBound');
	static readonly CONTROL_BAT_TO_PITCHER = new HittingMetric(
		'CONTROL_BAT_TO_PITCHER',
		'Distance In The Zone',
		'controlDistanceInTheZone',
		'IN',
		'controlBatDistanceTraveledTowardPitcherUpperBound');
	static readonly CONTROL_BAT_VERTICAL_ANGLE = new HittingMetric(
		'CONTROL_BAT_VERTICAL_ANGLE',
		'Vertical Bat Angle',
		'controlBatVerticalAngleImpact',
		'DEG',
		'controlBatVerticalAngleImpactUpperBound');

	get getKey(): string {
		return this.key;
	}

	get getName(): string {
		return this.name;
	}

	get getPropertyName(): string {
		return this.propertyName;
	}

	get getUnit(): string {
		return this.unit;
	}

	get getPopulationDataProperty(): string {
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
