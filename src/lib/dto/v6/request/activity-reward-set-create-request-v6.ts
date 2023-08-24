import { AbstractSyncableCreateRequestV6 } from "./abstract-syncable-create-request-v6";

export interface ActivityRewardSetCreateRequestV6 extends AbstractSyncableCreateRequestV6{ 
    name: string,
    bannerImageUrl: string,
    cardImageUrl: string,
    videoUrl: string,
    itemsEarnedCount: number
}