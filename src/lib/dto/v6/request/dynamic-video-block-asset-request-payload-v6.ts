import { BlockResult } from '../../../types/block-result';
import { BlockFeedbackType } from '../../../types/block-feedback-type';

export interface DynamicVideoBlockAssetRequestPayloadV6 {
  uuid: string;
  assetUrl: string;
  blockFeedbackType: BlockFeedbackType;
  blockResult?: BlockResult;
  eventIndex?: number;
  streakCount?: number;
  blockExpectationIndex?: number;
}
