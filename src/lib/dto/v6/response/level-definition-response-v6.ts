import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';

export interface LevelDefinitionResponseV6 extends AbstractSyncableResponseV6 {
  level: number;
  maxXp: number;
  statusUuid: string;
  levelsToNextStatus?: number;
  nextStatusUuid?: string;
}
