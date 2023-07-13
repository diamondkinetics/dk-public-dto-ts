import {AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';

export interface AbstractTimeWindowResponseV6 extends AbstractSyncableResponseV6 {
  startDateTime?: string;
  endDateTime?: string;
}