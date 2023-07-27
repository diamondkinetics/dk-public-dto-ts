export const AdvanceConditionTypes = ['EVENT', 'TIMED'] as const;
export type AdvanceConditionType = (typeof AdvanceConditionTypes)[number];
