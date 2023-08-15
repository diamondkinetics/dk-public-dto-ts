import { AbstractUserOwnedResponseV6 } from './abstract-user-owned-response-v6';
import { UserActivityResponseV6 } from './user-activity-response-v6';

export interface ChallengeProgressResponseV6 extends AbstractUserOwnedResponseV6 {
  startDate: string;
  completionDate?: string;
  challengeUuid: string;
  completionActivity?: UserActivityResponseV6;
}
