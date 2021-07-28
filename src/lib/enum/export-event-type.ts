export class ExportEventType {

	constructor(private readonly name: string) {}

	static readonly SWINGS = new ExportEventType('Swings');
	static readonly PITCHES = new ExportEventType('Pitches');

	public getName(): string {
		return this.name;
	}

	public static asArray(): ExportEventType[] {
		return [
			ExportEventType.SWINGS,
			ExportEventType.PITCHES
		];
	}

	public static byName(name: string): ExportEventType | undefined {
		return ExportEventType.asArray().find(t => t.getName() === name);
	}

}
