import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';
import { ActivityRewardType } from './../../../types/activity-reward-type';
import { CriteriaType } from './../../../types/criteria-type';
import { ItemResponseV6 } from './item-response-v6';

export interface ActivityRewardResponseV6 extends AbstractSyncableResponseV6 {
  type: ActivityRewardType;
  description: string;
  fullName: string;
  xpEarned: number;
  earnedItem?: ItemResponseV6;
  criteriaType?: CriteriaType;
  criteriaThreshold?: number;
}
