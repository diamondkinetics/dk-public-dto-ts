export class ExportEventSource {

	constructor(private readonly name: string) {}

	static readonly GROUP = new ExportEventSource('Group');
	static readonly PLAYERS = new ExportEventSource('Players');

	public getName(): string {
		return this.name;
	}

	public static asArray(): ExportEventSource[] {
		return [
			ExportEventSource.GROUP,
			ExportEventSource.PLAYERS
		];
	}

	public static byName(name: string): ExportEventSource | undefined {
		return ExportEventSource.asArray().find(s => s.getName() === name);
	}

}
