import { MetricExpectationType } from './../../../types/metric-expectation-type';

export interface MetricExpectationRequestPayloadV6 {
  type: MetricExpectationType;
  upperBound?: number;
  lowerBound?: number;
}
