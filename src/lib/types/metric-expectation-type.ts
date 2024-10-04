export const MetricExpectationTypes = [
  'RANGE',
  'MIN',
  'MAX'
] as const;
export type MetricExpectationType = typeof MetricExpectationTypes[number];
