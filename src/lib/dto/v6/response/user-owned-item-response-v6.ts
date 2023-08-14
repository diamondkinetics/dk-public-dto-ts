import { AbstractUserOwnedResponseV6 } from './abstract-user-owned-response-v6';

export interface UserOwnedItemResponseV6 extends AbstractUserOwnedResponseV6 {
  itemUuid: string;
  acquisitionDate: string;
}
