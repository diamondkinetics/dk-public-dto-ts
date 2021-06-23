import { RoleDTOV2, RoleDTOV3 } from '../dto';

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

	/**
	 * @deprecated This is used for legacy purposes stemming from from RoleDTOV2 and RoleDTOV3.
	 */
	public getUuid(): string {
		return this.uuid;
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

	public static fromDTO(dto: RoleDTOV2 | RoleDTOV3): GroupMembershipRole | undefined {
		return GroupMembershipRole.byShortName(dto.shortName ?? '');
	}

	public toDTO(role: GroupMembershipRole): RoleDTOV2 | RoleDTOV3 {
		return {
			uuid: '',
			fullName: role.getFriendlyName(),
			shortName: role.getShortName(),
			isAdmin: role.getIsAdmin(),
			isMember: role.getIsMember(),
			hierarchy: role.getPriority()
		};
	}

}
