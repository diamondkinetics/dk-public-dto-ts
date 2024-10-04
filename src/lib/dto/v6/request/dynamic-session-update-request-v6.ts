import { AdvanceConditionUpdateRequestV6 } from './advance-condition-update-request-v6';
import { DynamicVideoBlockAssetUpdateRequestV6 } from './dynamic-video-block-asset-update-request-v6';
import { DynamicVideoBlockUpdateRequestV6 } from './dynamic-video-block-update-request-v6';

export interface DynamicSessionUpdateRequestV6 {
  blocks: DynamicVideoBlockUpdateRequestV6[];
  assets: DynamicVideoBlockAssetUpdateRequestV6[];
  startBlockUuid: string;
  advanceCondition?: AdvanceConditionUpdateRequestV6;
}
