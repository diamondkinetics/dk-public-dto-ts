export const BlockExpectationTypes = ['EVENT_COUNT'] as const;
export type BlockExpectationType = (typeof BlockExpectationTypes)[number];
