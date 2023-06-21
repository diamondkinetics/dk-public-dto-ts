import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';

export interface ActivityDefinitionResponseV6 extends AbstractSyncableResponseV6 {
  name: string;
  smallActivityImageURL: string;
  largeActivityImageURL: string;
  isPremium: boolean;
  introConfig: {
    introVideoUrl: string;
    introVideoThumbnail: string;
    coverImageURL: string;
    description: string;
    aboutImageUrls: string[];
    aboutDescription: string;
  };
  engineType: string;
  engineConfig: {
    blocks: VideoBlock[];
    assets: AssetEntry[];
  };
  rewards: {
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    data: RewardData[];
  };
}

export interface VideoBlock {
  type: string;
  eventSource: string;
  displayMetric: string;
  displayChart: string;
  videoUrl: string;
  advanceCondition: {
    condition: string;
    threshold: number;
  };
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
  earnedItem: {
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
    assets: {
      additionalProp1: string;
      additionalProp2: string;
      additionalProp3: string;
    };
    config: {
      additionalProp1: string;
      additionalProp2: string;
      additionalProp3: string;
    };
  };
  criteriaType: string;
  criteriaThreshold: number;
}