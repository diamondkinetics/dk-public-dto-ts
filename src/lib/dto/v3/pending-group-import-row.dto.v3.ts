import { PendingGroupImportConflictDTOV3 } from './pending-group-import-conflict.dto.v3';
import { UserProfileDTOV3 } from './user-profile.dto.v3';

export interface PendingGroupImportRowDTOV3 {
	rowNumber: number;
	values: string[];
	existingUser?: UserProfileDTOV3;
	conflicts?: PendingGroupImportConflictDTOV3[];
}
