import { AbstractTimeWindowResponseV6 } from "./abstract-timewindow-response-v6";

export interface ViewEntryResponseV6 extends AbstractTimeWindowResponseV6 {
  viewSectionUuid: string;
  thumbnailUrl: string;
  displayOrder: number;
  activityDefinitionUuid: string;
}