export class BattingOrientation {

	public static RIGHTY = new BattingOrientation(0, 'Righty');
	public static LEFTY = new BattingOrientation(1, 'Lefty');
	public static SWITCH = new BattingOrientation(2, 'Switch');

	private readonly id: number;
	private readonly name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	get getId(): number {
		return this.id;
	}

	get getName(): string {
		return this.name;
	}

}
