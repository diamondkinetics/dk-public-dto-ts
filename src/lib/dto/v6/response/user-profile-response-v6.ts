import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';
import { UserCredentialCollectionResponseV6 } from './user-credential-collection-response-v6';
import { UserXPLevelResponseV6 } from './user-xp-level-response-v6';

export interface UserProfileResponseV6 extends AbstractSyncableResponseV6 {
  firstName?: string;
  lastName?: string;
  preferences?: string;
  birthDate?: string;
  height?: string;
  weight?: string;
  playType?: string;
  battingOrientation?: string;
  throwsHandedness?: string;
  competitionLevelUuid?: string;
  coach?: boolean;
  privateProfile?: boolean;
  zipCode?: string;
  profileImageUrl?: string;
  backgroundImageUrl?: string;
  userMetaData?: string;
  xpAndLevel: UserXPLevelResponseV6;
  avatarUuid?: string;
  cardDesignUuid?: string;
  badgeUuid?: string;
  playerNumber?: string;
  youthRegistration?: boolean;
  referringOrganizationUuid?: string;
  state?: string;
  graduationYear?: string;
  position?: string;
  mlbId?: string;
  credentials?: UserCredentialCollectionResponseV6;
  inviteUuid?: string;
}
