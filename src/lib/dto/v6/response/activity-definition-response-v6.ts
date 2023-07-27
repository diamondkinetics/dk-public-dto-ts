import { EngineType } from './../../../types/engine-type';
import { AbstractTimeWindowResponseV6 } from './abstract-timewindow-response-v6';
import { ActivityRewardCollectionResponseV6 } from './activity-reward-collection-response-v6';
import { ChallengeConfigResponseV6 } from './challenge-config-response-v6';
import { EngineConfigResponseV6 } from './engine-config-response-v6';
import { IntroConfigResponseV6 } from './intro-config-response-v6';
import { MiniGameConfigResponseV6 } from './mini-game-config-response-v6';
import { WebViewConfigResponseV6 } from './web-view-config-response-v6';

export interface ActivityDefinitionResponseV6 extends AbstractTimeWindowResponseV6 {
  name: string;
  smallActivityImageURL: string;
  largeActivityImageURL: string;
  isPremium: boolean;
  introConfig: IntroConfigResponseV6; 
  engineType: EngineType;
  engineConfig: EngineConfigResponseV6;
  miniGameConfig?: MiniGameConfigResponseV6;
  webViewConfig?: WebViewConfigResponseV6;
  challengeConfig?: ChallengeConfigResponseV6;
  rewards: ActivityRewardCollectionResponseV6; 
}
