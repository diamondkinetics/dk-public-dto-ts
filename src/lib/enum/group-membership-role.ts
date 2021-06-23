export class GroupMembershipRole {

	constructor(
		private readonly priority: number,
		private readonly friendlyName: string,
		private readonly shortName: string,
		private readonly isAdmin: boolean,
		private readonly isMember: boolean,
		private readonly uuid: string)
	{}

	static readonly ANYONE = new GroupMembershipRole(1, 'Anyone', 'anyone', false, false, '');
	static readonly MEMBER = new GroupMembershipRole(2, 'Member', 'member', false, true, '');
	static readonly ADMINISTRATOR = new GroupMembershipRole(4, 'Administrator', 'admin', true, true, '');

	public getPriority(): number {
		return this.priority;
	}

	public getFriendlyName(): string {
		return this.friendlyName;
	}

	public getShortName(): string {
		return this.shortName;
	}

	public getIsAdmin(): boolean {
		return this.isAdmin;
	}

	public getIsMember(): boolean {
		return this.isMember;
	}

	public static asArray(): GroupMembershipRole[] {
		return [
			GroupMembershipRole.ANYONE,
			GroupMembershipRole.MEMBER,
			GroupMembershipRole.ADMINISTRATOR
		];
	}

	public static byFriendlyName(friendlyName: string): GroupMembershipRole | undefined {
		return GroupMembershipRole.asArray().find(r => r.getFriendlyName() === friendlyName);
	}

	public static byShortName(shortName: string): GroupMembershipRole | undefined {
		return GroupMembershipRole.asArray().find(r => r.getShortName() === shortName);
	}

}
