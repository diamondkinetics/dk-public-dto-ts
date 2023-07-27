export const EngineTypes = [
  'BARREL_SPEED_CLIMBER',
  'TRIGGER_TO_IMPACT',
  'HOME_RUN_DERBY_BURNOUT',
  'OPEN_SESSION',
  'GUIDED_SESSION',
  'MINI_GAME',
  'CHALLENGE',
  'API_DRIVEN',
  'WEB_VIEW',
] as const;
export type EngineType = (typeof EngineTypes)[number];
