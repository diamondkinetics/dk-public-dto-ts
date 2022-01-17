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

	public static asArray(filterSwitch?: boolean): BattingOrientation[] {
		const orientations: BattingOrientation[] = [
			BattingOrientation.RIGHTY,
			BattingOrientation.LEFTY
		];

		if (filterSwitch) {
			return orientations;
		}

		orientations.push(BattingOrientation.SWITCH);

		return orientations;
	}

}
