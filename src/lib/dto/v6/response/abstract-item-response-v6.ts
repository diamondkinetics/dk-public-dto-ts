import { AbstractTimeWindowResponseV6 } from "./abstract-time-window-response-v6";

export interface AbstractItemResponseV6 extends AbstractTimeWindowResponseV6{ 
    templateUuid: string; 
    publicItem: boolean; 
    fullName: string;
    description: string; 
}
