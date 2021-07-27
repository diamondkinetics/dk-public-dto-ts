export class ExportEventType {

	constructor(private friendlyName: string) {}

	static readonly SWINGS = new ExportEventType('Swings');
	static readonly PITCHES = new ExportEventType('Pitches');

	public getFriendlyName(): string {
		return this.friendlyName;
	}

	public static asArray(): ExportEventType[] {
		return [
			ExportEventType.SWINGS,
			ExportEventType.PITCHES
		];
	}

	public static byFriendlyName(friendlyName: string): ExportEventType | undefined {
		return ExportEventType.asArray().find(t => t.getFriendlyName() === friendlyName);
	}

}
