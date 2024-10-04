import { EngineType } from './../../../types/engine-type';
import { AbstractSyncableCreateRequestV6 } from './abstract-syncable-create-request-v6';
import { AssetEntryUpdateRequestV6 } from './asset-entry-update-request-v6';
import { DynamicSessionCreateRequestV6 } from './dynamic-session-create-request-v6';
import { DynamicVideoBlockCreateRequestV6 } from './dynamic-video-block-create-request-v6';
import { IntroScreenConfigCreateRequestV6 } from './intro-screen-config-create-request-v6';

export interface ActivityDefinitionCreateRequestV6 extends AbstractSyncableCreateRequestV6 {
  name: string;
  smallActivityImageUrl: string;
  largeActivityImageUrl: string;
  isPremium: boolean;
  xpEarned: number;
  introConfig: IntroScreenConfigCreateRequestV6;
  engineType: EngineType;
  blocks?: DynamicVideoBlockCreateRequestV6[];
  assets?: AssetEntryUpdateRequestV6[];
  rewardSetUuid: string;
  dynamicSessionConfig?: DynamicSessionCreateRequestV6;
}
