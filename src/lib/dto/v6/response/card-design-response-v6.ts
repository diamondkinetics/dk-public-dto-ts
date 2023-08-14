import { AbstractItemResponseV6 } from './abstract-item-response-v6';

export interface CardDesignResponseV6 extends AbstractItemResponseV6 {
  backgroundURL?: string;
  backgroundThumbnailURL?: string;
  stickerImageURL?: string;
  stickerLabel?: string;
  avatarMaskShape?: string;
}
