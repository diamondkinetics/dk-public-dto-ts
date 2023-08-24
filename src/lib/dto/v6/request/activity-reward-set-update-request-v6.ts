import { AbstractSyncableUpdateRequestV6 } from "./abstract-syncable-update-request-v6";

export interface ActivityRewardSetUpdateRequestV6 extends AbstractSyncableUpdateRequestV6 { 
    name: string,
    bannerImageUrl: string,
    cardImageUrl: string,
    videoUrl: string,
    itemsEarnedCount: number
}