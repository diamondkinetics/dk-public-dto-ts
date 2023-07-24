import { AdvanceConditionType } from './../../../enum/advance-condition-type';
import { DisplayChart } from './../../../enum/display-chart';
import { DisplayMetric } from './../../../enum/display-metric';
import { EngineType } from './../../../enum/engine-type';
import { EventSource } from './../../../enum/event-source';
import { VideoBlockType } from './../../../enum/video-block-type';
import { AbstractSyncableUpdateRequestV6 } from './abstract-syncable-update-request-v6';

export interface ActivityDefinitionUpdateRequestV6 extends AbstractSyncableUpdateRequestV6 {
  name: string;
  smallActivityImageUrl: string;
  largeActivityImageUrl: string;
  isPremium: boolean;
  introConfig: IntroScreenConfigUpdateRequestV6;
  engineType: EngineType;
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
  type: VideoBlockType;
  eventSource: EventSource;
  displayMetric?: DisplayMetric;
  displayChart?: DisplayChart;
  videoUrl: string;
  advanceCondition: AdvanceConditionUpdateRequestV6;
  blockIndex: number;  
}

export interface AdvanceConditionUpdateRequestV6 {
  condition: AdvanceConditionType;
  threshold: number;
}

export interface AssetEntryUpdateRequestV6 {
  key: string;
  valueUrl: string;
}
