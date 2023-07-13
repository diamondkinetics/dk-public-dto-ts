import { AbstractSyncableCreateRequestV6 } from "./abstract-syncable-create-request-v6";

export interface ViewEntryCreateRequestV6 extends AbstractSyncableCreateRequestV6 {
  viewSectionUuid?: string;
  thumbnailUrl: string;
  displayOrder: number;
  activityDefinitionUuid: string;
}