import { DisplayMetric } from './../../../types/display-metric';
import { MetricExpectationRequestPayloadV6 } from './metric-expectation-request-payload-v6';

export interface TargetMetricRequestPayloadV6 {
  type: DisplayMetric;
  expectation: MetricExpectationRequestPayloadV6;
}
