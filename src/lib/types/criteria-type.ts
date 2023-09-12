export const CriteriaTypes = [
  'HOME_RUNS',
  'SWINGS',
  'GAMES_PLAYED',
  'GUIDED_SESSIONS',
  'OPEN_SESSIONS',
  'CONSECUTIVE_DAYS',
  'CONSECUTIVE_WEEKS',
  'UPDATE_AVATAR',
  'TOTAL_DISTANCE',
  'TOTAL_POWER',
  'PERSONAL_BEST',
  'THROWS',
  'LEVEL_STATUS',
] as const;
export type CriteriaType = (typeof CriteriaTypes)[number];
