import { MetricExpectationType } from './../../../types/metric-expectation-type';

export interface MetricExpectationResponseV6 {
  type: MetricExpectationType;
  upperBound?: number;
  lowerBound?: number;
}
