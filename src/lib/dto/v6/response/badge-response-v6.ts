import { AbstractItemResponseV6 } from './abstract-item-response-v6';

export interface BadgeResponseV6 extends AbstractItemResponseV6 {
  badgeURL: string;
  rewardDisplayURL?: string;
  playerNumberRelative: boolean;
}
