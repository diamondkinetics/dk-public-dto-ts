export const HittingMetricCategories = ['POWER', 'SPEED', 'CONTROL', 'QUICKNESS', 'DAMAGE_POTENTIAL'] as const;
export type HittingMetricCategory = (typeof HittingMetricCategories)[number];
