import { AdvanceConditionCreateRequestV6 } from './advance-condition-create-request-v6';
import { DynamicVideoBlockAssetCreateRequestV6 } from './dynamic-video-block-asset-create-request-v6';
import { DynamicVideoBlockCreateRequestV6 } from './dynamic-video-block-create-request-v6';

export interface DynamicSessionCreateRequestV6 {
  blocks: DynamicVideoBlockCreateRequestV6[];
  assets: DynamicVideoBlockAssetCreateRequestV6[];
  startBlockUuid: string;
  advanceCondition?: AdvanceConditionCreateRequestV6;
}


