import { AbstractSyncableDTOV2 } from './v2';
import { AbstractActivityDTOV3 } from './v3';
import { AbstractSyncableDTOV4 } from './v4';

export type AbstractSyncableDTO = AbstractSyncableDTOV2 | AbstractActivityDTOV3 | AbstractSyncableDTOV4;
