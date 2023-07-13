import { AbstractTimeWindowResponseV6 } from "./abstract-timewindow-response-v6";
import { ViewEntryCollectionResponseV6 } from "./view-entry-collection-response-v6";

export interface ViewSectionResponseV6 extends AbstractTimeWindowResponseV6 {
  viewTab: string;
  name?: string;
  description?: string;
  displayOrder: number;
  entries: ViewEntryCollectionResponseV6;
}