import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';

export interface SwingScorePopulationResponseV6 extends AbstractSyncableResponseV6 {
  competitionLevelUuid: string;
  minimum: number;
  maximum: number;
  median: number;
  lowerQuartile: number;
  upperQuartile: number;
}
