import { CriteriaType } from './../../../types/criteria-type';
import { ActivityDefinitionResponseV6 } from './activity-definition-response-v6';
import { LeaderboardEntryCollectionResponseV6 } from './leaderboard-entry-collection-response-v6';
import { LeaderboardEntryResponseV6 } from './leaderboard-entry-response-v6';

export interface ChallengeResponseV6 extends ActivityDefinitionResponseV6 {
  criteriaThreshold: number;
  criteria: CriteriaType;
  specifiedUser?: LeaderboardEntryResponseV6;
  leaderboard: LeaderboardEntryCollectionResponseV6;
}
