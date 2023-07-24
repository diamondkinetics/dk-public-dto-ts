import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';
import { AbstractItemResponseV6 } from './abstract-item-response-v6';
import { ActivityRewardType } from './../../../enum/activity-reward-type';
import { CriteriaType } from './../../../enum/criteria-type';

export interface ActivityRewardResponseV6 extends AbstractSyncableResponseV6 {
  type: ActivityRewardType;
  description: string;
  fullName: string;
  xpEarned: number;
  earnedItem?: ItemResponseV6;
  criteriaType?: CriteriaType;
  criteriaThreshold?: number;
}

export interface ItemResponseV6 extends AbstractItemResponseV6 {
  assets: {};
  config: {};
}
