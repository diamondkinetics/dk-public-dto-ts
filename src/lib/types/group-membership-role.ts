export const GroupMembershipRoles = ['ADMINISTRATOR', 'MEMBER', 'ANYONE'] as const;
export type GroupMembershipRole = (typeof GroupMembershipRoles)[number];
