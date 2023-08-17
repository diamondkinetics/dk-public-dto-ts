import { AbstractSyncableUpdateRequestV6 } from "./abstract-syncable-update-request-v6";

export interface ViewSectionUpdateRequestV6 extends AbstractSyncableUpdateRequestV6 {
  viewTab: string;
  name?: string;
  description?: string;
  displayOrder: number;
}