import { BlockExpectationResponseV6 } from './block-expectation-response-v6';
import { DynamicVideoBlockAssetResponseV6 } from './dynamic-video-block-asset-response-v6';
import { TargetMetricResponseV6 } from './target-metric-response-v6';
import { VideoBlockResponseV6 } from './video-block-response-v6';

export interface DynamicVideoBlockResponseV6 extends VideoBlockResponseV6 {
  blockExpectations: BlockExpectationResponseV6[];
  targetMetrics: TargetMetricResponseV6[];
  assets: DynamicVideoBlockAssetResponseV6;
  cadenceTime?: number;
  defaultNextBlockUuid?: string;
}
