import { AdvanceConditionResponseV6 } from './advance-condition-response-v6';
import { DynamicVideoBlockResponseV6 } from './dynamic-video-block-response-v6';

export interface DynamicSessionResponseV6 {
  blocks: Record<string, DynamicVideoBlockResponseV6>;  // Map of blocks with string keys and block responses
  assets: Record<string, string>;                       // Map of assets with string keys and asset URLs
  startBlockUuid: string;                               // UUID of the starting block
  advanceCondition?: AdvanceConditionResponseV6;        // Optional advance condition
}
