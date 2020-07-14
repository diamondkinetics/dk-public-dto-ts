export class Position {

	public static PITCHER = new Position('P', 'Pitcher');
	public static CATCHER = new Position('C', 'Catcher');
	public static FIRST_BASE = new Position('1B', 'First Base');
	public static SECOND_BASE = new Position('2B', 'Second Base');
	public static THIRD_BASE = new Position('3B', 'Third Base');
	public static SHORTSTOP = new Position('SS', 'Shortstop');
	public static LEFT_FIELD = new Position('LF', 'Left Field');
	public static CENTER_FIELD = new Position('CF', 'Center Field');
	public static RIGHT_FIELD = new Position('RF', 'Right Field');
	public static DESIGNATED_HITTER = new Position('DH', 'Designated Hitter');

	private readonly abbreviation: string;
	private readonly name: string;

	constructor(abbreviation: string, name: string) {
		this.abbreviation = abbreviation;
		this.name = name;
	}
	
	get getAbbreviation(): string {
		return this.abbreviation;
	}

	get getName(): string {
		return this.name;
	}

}
