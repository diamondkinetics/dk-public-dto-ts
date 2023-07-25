import { AbstractUserOwnedCreateRequestV6 } from './abstract-user-owned-create-request-v6';

export interface ChallengeProgressCreateRequestV6 extends AbstractUserOwnedCreateRequestV6 {
  userUuid: string;
  challengeUuid: string;
}
