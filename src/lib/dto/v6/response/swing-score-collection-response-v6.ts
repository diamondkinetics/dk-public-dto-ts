import { CollectionResponseV6 } from './collection-response-v6';
import { SwingScoreResponseV6 } from './swing-score-response-v6';

export interface SwingScoreCollectionResponseV6 extends CollectionResponseV6<SwingScoreResponseV6> {
  completedSwingsInNextBucket: number;
  totalSwingsInNextBucket: number;
}
