import { BlockFeedbackType } from './../../../types/block-feedback-type';
import { VideoBlockUpdateRequestV6 } from './video-block-update-request-v6';
import { BlockExpectationUpdateRequestV6 } from './block-expectation-update-request-v6';
import { TargetMetricUpdateRequestV6 } from './target-metric-update-request-v6';

export interface DynamicVideoBlockUpdateRequestV6 extends VideoBlockUpdateRequestV6 {
  targetMetrics: TargetMetricUpdateRequestV6[];
  expectations: BlockExpectationUpdateRequestV6[];
  cadenceTime?: number;
  defaultNextBlockUuid?: string;
  feedbackAssetUuids: Record<BlockFeedbackType, string[]>;
}
