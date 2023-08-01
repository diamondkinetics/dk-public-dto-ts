import { AbstractSyncableUpdateRequestV6 } from './abstract-syncable-update-request-v6';

export interface ChallengeProgressUpdateRequestV6 extends AbstractSyncableUpdateRequestV6 {
  completionDate: string;
}
