import { DisplayMetric } from './../../../types/display-metric';
import { MetricExpectationResponseV6 } from './metric-expectation-response-v6';

export interface TargetMetricResponseV6 {
  type: DisplayMetric;
  expectation: MetricExpectationResponseV6;
}
