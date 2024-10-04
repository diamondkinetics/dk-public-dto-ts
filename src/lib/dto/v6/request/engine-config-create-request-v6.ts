import { AssetEntryCreateRequestV6 } from './asset-entry-create-request-v6';
import { VideoBlockCreateRequestV6 } from './video-block-create-request-v6';

export interface EngineConfigCreateRequestV6 {
  blocks: VideoBlockCreateRequestV6[];
  assets: AssetEntryCreateRequestV6[];
}
