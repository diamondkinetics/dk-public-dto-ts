import { RoleDTOV2, RoleDTOV3 } from '../dto';

export class GroupMembershipRoleDetails {

	public static readonly ANYONE = new GroupMembershipRoleDetails(1, 'Anyone', 'anyone', false, false, '');
	public static readonly MEMBER = new GroupMembershipRoleDetails(2, 'Member', 'member', false, true, '');
	public static readonly ADMINISTRATOR = new GroupMembershipRoleDetails(4, 'Administrator', 'admin', true, true, '');

	constructor(
		private readonly priority: number,
		private readonly friendlyName: string,
		private readonly shortName: string,
		private readonly isAdmin: boolean,
		private readonly isMember: boolean,
		private readonly uuid: string
	) {}

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

	public static asArray(): GroupMembershipRoleDetails[] {
		return [
			GroupMembershipRoleDetails.ANYONE,
			GroupMembershipRoleDetails.MEMBER,
			GroupMembershipRoleDetails.ADMINISTRATOR
		];
	}

	public static byFriendlyName(friendlyName: string): GroupMembershipRoleDetails | undefined {
		return GroupMembershipRoleDetails.asArray().find(r => r.getFriendlyName() === friendlyName);
	}

	public static byShortName(shortName: string): GroupMembershipRoleDetails | undefined {
		return GroupMembershipRoleDetails.asArray().find(r => r.getShortName() === shortName);
	}

	public static fromDTO(dto: RoleDTOV2 | RoleDTOV3): GroupMembershipRoleDetails | undefined {
		return GroupMembershipRoleDetails.byShortName(dto.shortName ?? '');
	}

	public static toDTO(role: GroupMembershipRoleDetails): RoleDTOV2 | RoleDTOV3 {
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
