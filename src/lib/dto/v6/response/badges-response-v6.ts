import { AbstractSyncableResponseV6 } from "./abstract-syncable-response-v6";

export interface BadgesResponseV6 extends AbstractSyncableResponseV6{ 
    startDateTime: string;
    endDateTime: string;
    templateUuid: string; 
    publicItem: boolean;
    fullName: string;
    description: string; 
    badgeURL: string;
    rewardDisplayURL: string;
    playerNumberRelative: boolean;
}