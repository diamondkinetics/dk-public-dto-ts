export class ExportEventType {

	public static readonly SWINGS = new ExportEventType('Swings');
	public static readonly PITCHES = new ExportEventType('Pitches');

	constructor(private readonly name: string) {}

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
