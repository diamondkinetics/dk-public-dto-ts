export const BlockFeedbackTypes = [
  'EVENT',
  'PERSONAL_BEST',
  'EVENT_SUCCESS_STREAK',
  'EVENT_FAILURE_STREAK',
  'PRESSURE',
  'CADENCE',
  'BLOCK_EXPECTATION_COMPLETE'
] as const;
export type BlockFeedbackType = (typeof BlockFeedbackTypes)[number];
