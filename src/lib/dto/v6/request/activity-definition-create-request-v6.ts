import { AbstractSyncableCreateRequestV6 } from './abstract-syncable-create-request-v6';

export interface ActivityDefinitionCreateRequestV6 extends AbstractSyncableCreateRequestV6 {
  name: string;
  smallActivityImageUrl: string;
  largeActivityImageUrl: string;
  isPremium: boolean;
  introConfig: IntroScreenConfigCreateRequestV6;
  engineType: string;
  engineConfig: EngineConfigCreateRequestV6;
  rewardUuids: string[];
}

export interface IntroScreenConfigCreateRequestV6 {
  introVideoUrl: string;
  introVideoThumbnailUrl: string;
  coverImageUrl: string;
  description: string;
  aboutImagesUrls?: string[];
  aboutDescription: string;
}

export interface EngineConfigCreateRequestV6 {
  blocks: VideoBlockCreateRequestV6[];
  assets: AssetEntryCreateRequestV6[];
}

export interface VideoBlockCreateRequestV6 {
  type: string;
  eventSource: string;
  displayMetric?: string;
  displayChart?: string;
  videoUrl: string;
  advanceCondition: AdvanceConditionCreateRequestV6;
  blockIndex: number;
}

export interface AdvanceConditionCreateRequestV6 {
  condition: string;
  threshold: number;
}

export interface AssetEntryCreateRequestV6 {
  key: string;
  valueUrl: string;
}