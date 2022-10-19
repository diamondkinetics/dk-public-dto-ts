import { AbstractSyncableCreateRequestV6 } from './abstract-syncable-create-request-v6';

export interface UserCredentialCreateRequestV6 extends AbstractSyncableCreateRequestV6 {
  email?: string;
  nickname?: string;
  password?: string;
  secondaryEmail?: string;
  idProvider?: string;
  isPrimary?: boolean;
  externalId?: string;
}
