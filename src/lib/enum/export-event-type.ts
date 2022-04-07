export class ExportEventType {

	public static readonly SWINGS = new ExportEventType('Swings');
	public static readonly SWINGS_LITE = new ExportEventType('Swings Lite', '1WBsr5zWLESxwQp786mCvuy8SS2ck12j9leQwbgDNPPY');
	public static readonly PITCHES = new ExportEventType('Pitches');

	constructor(private readonly name: string, private readonly templateId?: string) {}

	public getName(): string {
		return this.name;
	}

	public getTemplateId(): string | undefined {
		return this.templateId;
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
