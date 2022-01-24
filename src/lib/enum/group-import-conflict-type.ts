export class GroupImportConflictType {

	public static readonly NOT_FOUND = new GroupImportConflictType('Not Found');
	public static readonly NAME_MISMATCH = new GroupImportConflictType('Name Mismatch');
	public static readonly REQUIRED = new GroupImportConflictType('Required');

	constructor(private readonly name: string) {}

	public getName(): string {
		return this.name;
	}

	public static asArray(): GroupImportConflictType[] {
		return [
			GroupImportConflictType.NOT_FOUND,
			GroupImportConflictType.NAME_MISMATCH,
			GroupImportConflictType.REQUIRED
		];
	}

}
