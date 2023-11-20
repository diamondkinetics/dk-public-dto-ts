import { AbstractItemResponseV6 } from './abstract-item-response-v6';

export interface ItemResponseV6 extends AbstractItemResponseV6 {
  assets: Record<string, any>;
  config: Record<string, any>;
}
