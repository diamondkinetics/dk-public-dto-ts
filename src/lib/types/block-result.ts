export const BlockResults = [
  'SUCCESS',
  'FAILURE',
] as const;
export type BlockResult = (typeof BlockResults)[number];
