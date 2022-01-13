export class BattingOrientation {

	public static readonly RIGHTY = new BattingOrientation(0, 'Righty');
	public static readonly LEFTY = new BattingOrientation(1, 'Lefty');
	public static readonly SWITCH = new BattingOrientation(2, 'Switch');

	constructor(private readonly id: number, private readonly name: string) {}

	public getId(): number {
		return this.id;
	}

	public getName(): string {
		return this.name;
	}

	public static asArray(): BattingOrientation[] {
		return [
			BattingOrientation.RIGHTY,
			BattingOrientation.LEFTY,
			BattingOrientation.SWITCH
		];
	}

}
