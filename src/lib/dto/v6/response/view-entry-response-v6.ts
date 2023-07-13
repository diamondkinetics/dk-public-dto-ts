import { AbstractTimeWindowResponseV6 } from "./abstract-timewindow-response-v6";

export interface ViewEntryResponseV6 extends AbstractTimeWindowResponseV6 {
  thumbnailUrl: string;
  displayOrder: number;
  activityDefinitionUuid: string;
}