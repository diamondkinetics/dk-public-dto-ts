export class PlayType {

	public static BASEBALL = new PlayType(0, 'Baseball', 'Baseball');
	public static SLOW_PITCH_SOFTBALL = new PlayType(1, 'Slow-Pitch Softball', 'Softball');
	public static FAST_PITCH_SOFTBALL = new PlayType(2, 'Fast-Pitch Softball', 'Softball');

	private readonly id: number;
	private readonly name: string;
	private readonly marketingName: string;

	constructor(id: number, name: string, marketingName: string) {
		this.id = id;
		this.name = name;
		this.marketingName = marketingName;
	}

	get getId(): number {
		return this.id;
	}

	get getName(): string {
		return this.name;
	}

	get getMarketingName(): string {
		return this.marketingName;
	}
	
}
