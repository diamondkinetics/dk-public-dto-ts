import { PendingGroupImportRowDTOV3 } from './pending-group-import-row.dto.v3';

export interface PendingGroupImportDTOV3 {
	groupImportUuid: string;
	headers: string[];
	rows: PendingGroupImportRowDTOV3[];
	confirmed?: boolean;
}
