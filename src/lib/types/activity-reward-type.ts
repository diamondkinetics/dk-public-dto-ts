export const ActivityRewardTypes = ['ACTIVITY', 'PERFORMANCE', 'MILESTONE', 'NETWORK'] as const;
export type ActivityRewardType = (typeof ActivityRewardTypes)[number];
