import { AssetEntryResponseV6 } from './asset-entry-response-v6';
import { VideoBlockResponseV6 } from './video-block-response-v6';

export interface EngineConfigResponseV6 {
  blocks: VideoBlockResponseV6[];
  assets: AssetEntryResponseV6[];
}
