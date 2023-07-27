export const DisplayCharts = [
  'HISTOGRAM',
  'ATTACK_ANGLE',
  'VERTICAL_BAT_ANGLE',
  'RADIAL',
  'SPIN_EFFICIENCY',
  'RELEASE_VELOCITY',
] as const;

export type DisplayChart = (typeof DisplayCharts)[number];
