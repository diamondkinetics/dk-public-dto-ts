import { AbstractSyncableCreateRequestV6 } from "./abstract-syncable-create-request-v6";

export interface ActivityRewardCreateRequestV6 extends AbstractSyncableCreateRequestV6 { 
    itemUuid: string; 
    multiplicity: number;
    criteria?: string; 
    criteriaThreshold?: string;
    activityRewardSetUuid?: string;
}