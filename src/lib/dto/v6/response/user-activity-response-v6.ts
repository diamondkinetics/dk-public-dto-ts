import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';
import { ActivityRewardResponseV6 } from './activity-reward-response-v6';
import { UserOwnedItemResponseV6 } from './user-owned-item-response-v6';
import { UserProfileResponseV6 } from './user-profile-response-v6';

export interface UserActivityResponseV6 extends AbstractSyncableResponseV6 {
  user: UserProfileResponseV6;
  rewards: ActivityRewardResponseV6[];
  earnedItems: UserOwnedItemResponseV6[];
  activityDefinitionUuid: string;
  xpEarned: number;
}
