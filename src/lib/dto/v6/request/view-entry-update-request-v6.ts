import { AbstractSyncableUpdateRequestV6 } from "./abstract-syncable-update-request-v6";

export interface ViewEntryUpdateRequestV6 extends AbstractSyncableUpdateRequestV6 {
  viewSectionUuid?: string;
  thumbnailUrl: string;
  displayOrder: number;
  activityDefinitionUuid: string;
}