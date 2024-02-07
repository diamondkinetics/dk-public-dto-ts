import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';

export interface LevelStatusResponseV6 extends AbstractSyncableResponseV6 {
  name: string;
  statusTagURL: string;
  gradientStart: string;
  gradientMid?: string;
  gradientEnd: string;
  backgroundColor: string;
}
