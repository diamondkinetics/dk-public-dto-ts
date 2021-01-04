export class MaterialType {

	public static WOOD = new MaterialType(0, 'Wood');
	public static ALUMINUM = new MaterialType(1, 'Aluminum');
	public static COMPOSITE = new MaterialType(2, 'Composite');
	public static OTHER = new MaterialType(3, 'Other');

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

	public static asArray(): MaterialType[] {
		return [
			MaterialType.WOOD,
			MaterialType.ALUMINUM,
			MaterialType.COMPOSITE,
			MaterialType.OTHER
		];
	}

}
