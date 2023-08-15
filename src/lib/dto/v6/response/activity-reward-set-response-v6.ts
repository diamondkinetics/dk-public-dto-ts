import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';

export interface ActivityRewardSetResponseV6 extends AbstractSyncableResponseV6 {
  name: string;
  bannerImageUrl: string;
  cardImageUrl: string;
  videoUrl: string;
  itemsEarnedCount: number;
}
