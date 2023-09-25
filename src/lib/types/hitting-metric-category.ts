export const HittingMetricCategories = ['POWER', 'SPEED', 'CONTROL', 'QUICKNESS'] as const;
export type HittingMetricCategory = (typeof HittingMetricCategories)[number];
