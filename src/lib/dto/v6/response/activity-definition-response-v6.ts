import { AdvanceConditionType } from './../../../enum/advance-condition-type';
import { DisplayChart } from './../../../enum/display-chart';
import { DisplayMetric } from './../../../enum/display-metric';
import { EngineType } from './../../../enum/engine-type';
import { EventSource } from './../../../enum/event-source';
import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';
import { ActivityRewardCollectionResponseV6 } from './activity-reward-collection-response-v6';

export interface ActivityDefinitionResponseV6 extends AbstractSyncableResponseV6 {
  name: string;
  smallActivityImageURL: string;
  largeActivityImageURL: string;
  isPremium: boolean;
  introConfig: IntroConfig; 
  engineType: EngineType;
  engineConfig: EngineConfig;
  rewards: ActivityRewardCollectionResponseV6; 
}

export interface IntroConfig { 
  introVideoUrl: string;
  introVideoThumbnail: string;
  coverImageURL: string;
  description: string;
  aboutImageUrls: string[];
  aboutDescription: string;
}

export interface EngineConfig {
  blocks: VideoBlock[];
  assets: AssetEntry[];
}

export interface VideoBlock {
  type: string;
  eventSource: EventSource;
  displayMetric: DisplayMetric;
  displayChart: DisplayChart;
  videoUrl: string;
  advanceCondition: AdvanceCondition;
  blockIndex: number;
}

export interface AssetEntry {
  key: string;
  value: string;
}

export interface AdvanceCondition { 
  condition: AdvanceConditionType;
  threshold: number;
}
