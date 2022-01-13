export class PitchingMetric {

	public static readonly RELEASE_SPEED = new PitchingMetric(
		'RELEASE_SPEED',
		'Release Speed',
		'releaseSpeed',
		'MPH');

	public static readonly RELEASE_SPIN_RATE = new PitchingMetric(
		'RELEASE_SPIN_RATE',
		'Release Spin Rate',
		'releaseSpinRate',
		'RPM');

	public static readonly RELEASE_EXTENSION_FT = new PitchingMetric(
		'RELEASE_EXTENSION_FT',
		'Extension',
		'extensionFt',
		'FT');

	public static readonly DELIVERY_OVERALL = new PitchingMetric(
		'DELIVERY_OVERALL',
		'Delivery',
		'deliveryOverall',
		'SEC');

	public static readonly DELIVERY_SET_TO_EXTENSION = new PitchingMetric(
		'DELIVERY_SET_TO_EXTENSION',
		'Set to Extension',
		'deliverySetToExtension',
		'SEC');

	public static readonly DELIVERY_EXTENSION_TO_RELEASE = new PitchingMetric(
		'DELIVERY_EXTENSION_TO_RELEASE',
		'Reach Back to Release',
		'deliveryExtensionToRelease',
		'SEC');
	
	public static readonly DELIVERY_TIME_TO_PLATE = new PitchingMetric(
		'DELIVERY_TIME_TO_PLATE',
		'Time to Plate',
		'timeToPlate',
		'SEC');

	public static readonly FLIGHT_HORIZONTAL_BREAK = new PitchingMetric(
		'FLIGHT_HORIZONTAL_BREAK',
		'Horizontal Break',
		'flightHorizontalBreak',
		'IN');

	public static readonly FLIGHT_VERTICAL_BREAK = new PitchingMetric(
		'FLIGHT_HORIZONTAL_BREAK',
		'Horizontal Break',
		'flightVerticalBreak',
		'IN');

	public static readonly LOCATION_X = new PitchingMetric(
		'LOCATION_X',
		'Horizontal Pitch Location',
		'locationX');

	public static readonly LOCATION_Y = new PitchingMetric(
		'LOCATION_Y',
		'Vertical Pitch Location',
		'locationY');

	public static readonly INTENDED_LOCATION_X = new PitchingMetric(
		'LOCATION_X',
		'Intended Horizontal Pitch Location',
		'intendedLocationX');

	public static readonly INTENDED_LOCATION_Y = new PitchingMetric(
		'LOCATION_Y',
		'Intended Vertical Pitch Location',
		'intendedLocationY');

	public static readonly SPIN_EFFICIENCY = new PitchingMetric(
		'SPIN_EFFICIENCY',
		'Spin Efficiency',
		'spinEfficiency',
		'%');

	constructor(
		private readonly key: string,
		private readonly name: string,
		private readonly propertyName: string,
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

	public static asArray() {
		return [
			PitchingMetric.DELIVERY_EXTENSION_TO_RELEASE,
			PitchingMetric.DELIVERY_OVERALL,
			PitchingMetric.DELIVERY_SET_TO_EXTENSION,
			PitchingMetric.DELIVERY_TIME_TO_PLATE,
			PitchingMetric.FLIGHT_HORIZONTAL_BREAK,
			PitchingMetric.FLIGHT_VERTICAL_BREAK,
			PitchingMetric.INTENDED_LOCATION_X,
			PitchingMetric.INTENDED_LOCATION_Y,
			PitchingMetric.LOCATION_X,
			PitchingMetric.LOCATION_Y,
			PitchingMetric.RELEASE_EXTENSION_FT,
			PitchingMetric.RELEASE_SPEED,
			PitchingMetric.RELEASE_SPIN_RATE,
			PitchingMetric.SPIN_EFFICIENCY
		];
	}

	public static byKey(key: string): PitchingMetric | undefined {
		return PitchingMetric.asArray().find(m => m.key === key);
	}

	public static isPitchingMetric(metric: any): metric is PitchingMetric {
		return true;
	}

}