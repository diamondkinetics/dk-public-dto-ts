import { AbstractSyncableResponseV6 } from "./abstract-syncable-response-v6";
import { AbstractItemResponseV6 } from "./abstract-item-response-v6";

export interface ActivityRewardResponseV6 extends AbstractSyncableResponseV6{ 
    type: string;
    description: string; 
    fullName: string; 
    xpEarned: number;
    earnedItem?: ItemResponseV6;
    criteriaType?: string;
    criteriaThreshold?: number;
}

export interface ItemResponseV6 extends AbstractItemResponseV6{ 
    assets: {};
    config: {};
}

