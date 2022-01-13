export class ExportEventSource {

	public static readonly GROUP = new ExportEventSource('Group');
	public static readonly PLAYERS = new ExportEventSource('Players');

	constructor(private readonly name: string) {
		this.name = name;
	}

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
