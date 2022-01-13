export class AggregationOperation {

	public static readonly TOTAL = new AggregationOperation('total', true);
	public static readonly AVERAGE = new AggregationOperation('average', true);
	public static readonly COUNT = new AggregationOperation('count', false);
	public static readonly BEST = new AggregationOperation('best', true);

	constructor(private readonly fullName: string, private readonly metricRequired: boolean) {}

	public getFullName(): string {
		return this.fullName;
	}

	public isMetricRequired(): boolean {
		return this.metricRequired;
	}

	public static asArray(): AggregationOperation[] {
		return [
			AggregationOperation.TOTAL,
			AggregationOperation.AVERAGE,
			AggregationOperation.COUNT,
			AggregationOperation.BEST
		];
	}

}
