import { AbstractSensorEventCollectionSummaryResponseV6 } from './abstract-sensor-event-collection-summary-response-v6';
import { AbstractUserOwnedResponseV6 } from './abstract-user-owned-response-v6';

export interface AbstractSensorSessionResponseV6 extends AbstractUserOwnedResponseV6 {
  competitionLevelUuid: string;
  userUuid: string;
  extensionType?: string;
  extensionDetails?: Record<string, any>;
  playType?: string;
  notes?: string;
  events?: AbstractSensorEventCollectionSummaryResponseV6;
  associatedGroupUuid?: string;
}
