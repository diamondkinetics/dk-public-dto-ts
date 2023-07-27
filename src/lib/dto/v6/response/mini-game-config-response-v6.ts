import { QuestionResponseV6 } from './question-response-v6';

export interface MiniGameConfigResponseV6 {
  backgroundImageUrl: string;
  primaryColor: string;
  secondaryColor: string;
  teamId?: string;
  position?: string;
  questions: QuestionResponseV6[];
}
