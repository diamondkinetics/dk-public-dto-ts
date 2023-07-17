import { AbstractTimeWindowResponseV6 } from "./abstract-timewindow-response-v6";

export interface AbstractItemResponseV6 extends AbstractTimeWindowResponseV6{ 
    templateUuid: string; 
    publicItem: boolean; 
    fullName?: string;
    description?: string; 
}
