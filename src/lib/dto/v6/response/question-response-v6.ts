import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';
import { AnswerResponseV6 } from './answer-response-v6';

export interface QuestionResponseV6 extends AbstractSyncableResponseV6 {
  displayOrder: number;
  prompt: string;
  videoUrl: string;
  startAt: number;
  pauseAt: number;
  endAt: number;
  answers: AnswerResponseV6[];
}
