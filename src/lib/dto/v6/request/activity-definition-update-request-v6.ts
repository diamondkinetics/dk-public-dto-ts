import { EngineType } from './../../../types/engine-type';
import { AbstractSyncableUpdateRequestV6 } from './abstract-syncable-update-request-v6';
import { AssetEntryUpdateRequestV6 } from './asset-entry-update-request-v6';
import { DynamicSessionUpdateRequestV6 } from './dynamic-session-update-request-v6';
import { IntroScreenConfigUpdateRequestV6 } from './intro-screen-config-update-request-v6';
import { VideoBlockUpdateRequestV6 } from './video-block-update-request-v6';

export interface ActivityDefinitionUpdateRequestV6 extends AbstractSyncableUpdateRequestV6 {
  name: string;
  smallActivityImageUrl: string;
  largeActivityImageUrl: string;
  isPremium: boolean;
  xpEarned: number;
  introConfig: IntroScreenConfigUpdateRequestV6;
  engineType: EngineType;
  blocks?: VideoBlockUpdateRequestV6[];
  assets?: AssetEntryUpdateRequestV6[];
  rewardSetUuid: string;
  dynamicSessionConfig?: DynamicSessionUpdateRequestV6;
}
