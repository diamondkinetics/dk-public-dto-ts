import { AbstractSyncableCreateRequestV6 } from "./abstract-syncable-create-request-v6";

export interface ViewSectionCreateRequestV6 extends AbstractSyncableCreateRequestV6 {
  viewTab: string;
  name?: string;
  description?: string;
  displayOrder: number;
}