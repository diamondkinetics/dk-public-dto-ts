export const MetricExpecationTypes = [
  'RANGE',
  'MIN',
  'MAX'
] as const;
export type MetricExpectationType = typeof MetricExpecationTypes[number];
