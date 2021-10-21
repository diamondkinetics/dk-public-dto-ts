import { AbstractSyncableDTOV2 } from './v2';
import { AbstractActivityDTOV3 } from './v3';
import { AbstractSyncableDTOV4 } from './v4';
import { AbstractSyncableCollectionResponseSummaryV5, AbstractSyncableResponseV5 } from "./v5/abstract-syncable.dto.v5";

export type AbstractSyncableDTO = AbstractSyncableDTOV2 | AbstractActivityDTOV3 | AbstractSyncableDTOV4
    | AbstractSyncableResponseV5 | AbstractSyncableCollectionResponseSummaryV5;
