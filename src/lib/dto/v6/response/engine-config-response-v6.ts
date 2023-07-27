import { AssetEntryCollectionResponseV6 } from './asset-entry-collection-response-v6';
import { VideoBlockCollectionResponseV6 } from './video-block-collection-response-v6';

export interface EngineConfigResponseV6 {
  blocks: VideoBlockCollectionResponseV6;
  assets: AssetEntryCollectionResponseV6;
}
