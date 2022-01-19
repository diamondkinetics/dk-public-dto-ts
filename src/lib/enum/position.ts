export class Position {

	public static readonly PITCHER = new Position('P', 'Pitcher');
	public static readonly CATCHER = new Position('C', 'Catcher');
	public static readonly FIRST_BASE = new Position('1B', 'First Base');
	public static readonly SECOND_BASE = new Position('2B', 'Second Base');
	public static readonly THIRD_BASE = new Position('3B', 'Third Base');
	public static readonly SHORTSTOP = new Position('SS', 'Shortstop');
	public static readonly LEFT_FIELD = new Position('LF', 'Left Field');
	public static readonly CENTER_FIELD = new Position('CF', 'Center Field');
	public static readonly RIGHT_FIELD = new Position('RF', 'Right Field');
	public static readonly DESIGNATED_HITTER = new Position('DH', 'Designated Hitter');

	constructor(private readonly abbreviation: string, private readonly name: string) {
		this.abbreviation = abbreviation;
		this.name = name;
	}
	
	public getAbbreviation(): string {
		return this.abbreviation;
	}

	public getName(): string {
		return this.name;
	}

	public static asArray(): Position[] {
		return [
			Position.PITCHER,
			Position.CATCHER,
			Position.FIRST_BASE,
			Position.SECOND_BASE,
			Position.THIRD_BASE,
			Position.SHORTSTOP,
			Position.LEFT_FIELD,
			Position.CENTER_FIELD,
			Position.RIGHT_FIELD,
			Position.DESIGNATED_HITTER
		];
	}

}
