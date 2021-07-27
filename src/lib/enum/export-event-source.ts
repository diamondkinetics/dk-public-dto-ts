export class ExportEventSource {

	constructor(private readonly friendlyName: string) {}

	static readonly GROUP = new ExportEventSource('Group');
	static readonly PLAYERS = new ExportEventSource('Players');

	public getFriendlyName(): string {
		return this.friendlyName;
	}

	public static asArray(): ExportEventSource[] {
		return [
			ExportEventSource.GROUP,
			ExportEventSource.PLAYERS
		];
	}

	public static byFriendlyName(friendlyName: string): ExportEventSource | undefined {
		return ExportEventSource.asArray().find(s => s.getFriendlyName() === friendlyName);
	}

}
