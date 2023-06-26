import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';

export interface ActivityDefinitionResponseV6 extends AbstractSyncableResponseV6 {
  name: string;
  smallActivityImageURL: string;
  largeActivityImageURL: string;
  isPremium: boolean;
  introConfig: IntroConfig; 
  engineType: string;
  engineConfig: EngineConfig;
  rewards: Rewards; 
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

export interface Rewards{ 
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  data: RewardData[];
}

export interface VideoBlock {
  type: string;
  eventSource: string;
  displayMetric: string;
  displayChart: string;
  videoUrl: string;
  advanceCondition: AdvanceCondition;
  blockIndex: number;
}

export interface AssetEntry {
  key: string;
  value: string;
}

export interface RewardData {
  serverCreatedTime: string;
  serverUpdatedTime: string;
  clientCreatedTime: string;
  clientUpdatedTime: string;
  uuid: string;
  deleted: boolean;
  type: string;
  description: string;
  fullName: string;
  xpEarned: number;
  earnedItem: EarnedItem;
  criteriaType: string;
  criteriaThreshold: number;
}

export interface AdvanceCondition { 
  condition: string;
  threshold: number;
}

export interface EarnedItem { 
  serverCreatedTime: string;
  serverUpdatedTime: string;
  clientCreatedTime: string;
  clientUpdatedTime: string;
  uuid: string;
  deleted: boolean;
  startDateTime: string;
  endDateTime: string;
  templateUuid: string;
  publicItem: boolean;
  fullName: string;
  description: string;
  assets: Assets;
  config: Config;
}

export interface Assets { 
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}

export interface Config { 
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}