export class PlayType {

	public static BASEBALL = new PlayType(0, 'Baseball', 'Baseball');
	public static SLOW_PITCH_SOFTBALL = new PlayType(1, 'Slow-Pitch Softball', 'Softball');
	public static FAST_PITCH_SOFTBALL = new PlayType(2, 'Fast-Pitch Softball', 'Softball');

	constructor(private readonly id: number, private readonly name: string, private readonly marketingName: string) {}

	public getId(): number {
		return this.id;
	}

	public getName(): string {
		return this.name;
	}

	public getMarketingName(): string {
		return this.marketingName;
	}
	
}
