import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';

export interface AnswerResponseV6 extends AbstractSyncableResponseV6 {
  displayOrder: number;
  prompt: string;
  primaryColor: string;
  secondaryColor: string;
  isCorrect: boolean;
  onRevealEmoji: string;
  onRevealText: string;
}
