export class AggregationOperation {

	public static TOTAL = new AggregationOperation('total', true);
	public static AVERAGE = new AggregationOperation('average', true);
	public static COUNT = new AggregationOperation('count', false);
	public static BEST = new AggregationOperation('best', true);

	private readonly fullName: string;
	private readonly metricRequired: boolean; 

	constructor(fullName: string, metricRequired: boolean) {
		this.fullName = fullName;
		this.metricRequired = metricRequired;
	}

	get getFullName(): string {
		return this.fullName;
	}

	get isMetricRequired(): boolean {
		return this.metricRequired;
	}

}
