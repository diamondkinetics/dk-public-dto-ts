import { BlockFeedbackType } from './../../../types/block-feedback-type';
import { BlockExpectationCreateRequestV6 } from './block-expectation-create-request-v6';
import { TargetMetricCreateRequestV6 } from './target-metric-crequest-request-v6';
import { VideoBlockCreateRequestV6 } from './video-block-create-request-v6';

export interface DynamicVideoBlockCreateRequestV6 extends VideoBlockCreateRequestV6 {
  targetMetrics: TargetMetricCreateRequestV6[];
  expectations: BlockExpectationCreateRequestV6[];
  cadenceTime?: number;
  defaultNextBlockUuid?: string;
  feedbackAssetUuids: Record<BlockFeedbackType, string[]>;
}
