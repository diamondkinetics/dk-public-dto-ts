import { AbstractSyncableCreateRequestV6 } from './abstract-syncable-create-request-v6';

export interface UserProfileCreateRequestNoCredentialsV6 extends AbstractSyncableCreateRequestV6 {
  firstName: string;
  lastName: string;
  coach: boolean;
  batsHandedness?: string;
  throwsHandedness?: string;
  profileImageUrl?: string;
  zipCode?: string;
  playType?: string;
  competitionLevelUuid?: string;
  birthDate?: string;
  height?: string;
  weight?: string;
  source?: string;
  privateProfile?: boolean;
}
