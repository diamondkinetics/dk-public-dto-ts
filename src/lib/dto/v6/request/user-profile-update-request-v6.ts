export interface UserProfileUpdateRequestV6 {
  firstName: string;
  lastName: string;
  playType: string;
  battingOrientation: string;
  throwsHandedness: string;
  competitionLevelUuid: string;
  weight: string;
  height: string;
  zipCode: string;
  birthDate: string;
  profileImageUrl: string;
  backgroundImageUrl: string;
  avatarUuid: string;
  cardDesignUuid: string;
  badgeUuid: string;
  playerNumber: string;
  clientUpdatedTime: string;
  privateProfile?: boolean;
  inviteUuid?: string;
}
