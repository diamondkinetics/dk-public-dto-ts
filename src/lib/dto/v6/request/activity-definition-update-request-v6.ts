import { AbstractSyncableUpdateRequestV6 } from './abstract-syncable-update-request-v6';

export interface ActivityDefinitionUpdateRequestV6 extends AbstractSyncableUpdateRequestV6 {
  name: string;
  smallActivityImageUrl: string;
  largeActivityImageUrl: string;
  isPremium: boolean;
  introConfig: IntroScreenConfigUpdateRequestV6;
  engineType: string;
  blocks: VideoBlockUpdateRequestV6[];
  assets: AssetEntryUpdateRequestV6[];
  rewardUuids: string[];
}

export interface IntroScreenConfigUpdateRequestV6 {
  introVideoUrl: string;
  introVideoThumbnailUrl: string;
  coverImageUrl: string;
  description: string;
  aboutImagesUrls?: string[];
  aboutDescription: string;
}

export interface VideoBlockUpdateRequestV6 {
  type: string;
  eventSource: string;
  displayMetric?: string;
  displayChart?: string;
  videoUrl: string;
  advanceCondition: AdvanceConditionUpdateRequestV6;
  blockIndex: number;  
}

export interface AdvanceConditionUpdateRequestV6 {
  condition: string;
  threshold: number;
}

export interface AssetEntryUpdateRequestV6 {
  key: string;
  valueUrl: string;
}