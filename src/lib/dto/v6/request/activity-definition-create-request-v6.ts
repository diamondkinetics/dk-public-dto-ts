import { AdvanceConditionType } from './../../../types/advance-condition-type';
import { VideoBlockType } from './../../../types/video-block-type';
import { EngineType } from './../../../types/engine-type';
import { EventSource } from './../../../types/event-source';
import { DisplayMetric } from './../../../types/display-metric';
import { DisplayChart } from './../../../types/display-chart';
import { AbstractSyncableCreateRequestV6 } from './abstract-syncable-create-request-v6';

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
  type: VideoBlockType;
  eventSource: EventSource;
  displayMetric?: DisplayMetric;
  displayChart?: DisplayChart;
  videoUrl: string;
  advanceCondition: AdvanceConditionCreateRequestV6;
  blockIndex: number;
}

export interface AdvanceConditionCreateRequestV6 {
  condition: AdvanceConditionType;
  threshold: number;
}

export interface AssetEntryCreateRequestV6 {
  key: string;
  valueUrl: string;
}
