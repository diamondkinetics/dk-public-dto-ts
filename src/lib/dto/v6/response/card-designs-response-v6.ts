import { AbstractSyncableResponseV6 } from "./abstract-syncable-response-v6";

export interface CardDesignsResponseV6 extends AbstractSyncableResponseV6{
    startDateTime: string;
    endDateTime: string;
    templateUuid: string; 
    publicItem: boolean;
    fullName: string;
    description: string; 
    backgroundURL: string;
    backgroundThumbnailURL: string;
    stickerImageURL: string;
    stickerLabel: string;
    avatarMaskShape: string;
}