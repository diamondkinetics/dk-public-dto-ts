export class SessionType {

	public static TEE = new SessionType('Tee', 0, false);
	public static FRONT_TOSS = new SessionType('Soft Toss - Front', 1, false);
	public static SOFT_TOSS = new SessionType('Soft Toss - Side', 2, false);
	public static PITCHING_MACHINE = new SessionType('Pitching Machine', 3, true);
	public static BATTING_PRACTICE = new SessionType('Batting Practice', 4, false);
	public static LIVE_PITCH_LEFTY = new SessionType('Live Pitch - Lefthander', 5, true);
	public static LIVE_PITCH_RIGHTY = new SessionType('Live Pitch - Righthander', 6, true);

	private readonly name: string;
	private readonly sortOrder: number;
	private readonly usePitchType: boolean;

	constructor(name: string, sortOrder: number, usePitchType: boolean) {
		this.name = name;
		this.sortOrder = sortOrder;
		this.usePitchType = usePitchType;
	}

	get getName(): string {
		return this.name;
	}

	get getSortOrder(): number {
		return this.sortOrder;
	}

	get usesPitchType(): boolean {
		return this.usePitchType;
	}

}
