import { EngineType } from './../../../types/engine-type';
import { AbstractSyncableCreateRequestV6 } from './abstract-syncable-create-request-v6';
import { EngineConfigCreateRequestV6 } from './engine-config-create-request-v6';
import { IntroScreenConfigCreateRequestV6 } from './intro-screen-config-create-request-v6';

export interface ActivityDefinitionCreateRequestV6 extends AbstractSyncableCreateRequestV6 {
  name: string;
  smallActivityImageUrl: string;
  largeActivityImageUrl: string;
  isPremium: boolean;
  xpEarned: number;
  introConfig: IntroScreenConfigCreateRequestV6;
  engineType: EngineType;
  engineConfig: EngineConfigCreateRequestV6;
  rewardSetUuid: string;
}


