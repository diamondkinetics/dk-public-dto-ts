import { define } from 'cooky-cutter';
import { company, random } from 'faker';

import { PendingGroupImportDTOV3 } from './../../dto/v3/pending-group-import.dto.v3';
import { mockPendingGroupImportRowDTOV3 } from './pending-group-import-row.dto.v3.mock';

export const mockPendingGroupImportDTOV3 = define<PendingGroupImportDTOV3>({
	groupImportUuid: () => random.uuid(),
	headers: () => Array.from({ length: 3 }, () => company.bsNoun()),
	rows: () => [
		mockPendingGroupImportRowDTOV3(),
		mockPendingGroupImportRowDTOV3(),
		mockPendingGroupImportRowDTOV3(),
		mockPendingGroupImportRowDTOV3(),
		mockPendingGroupImportRowDTOV3()
	],
	confirmed: () => random.boolean()
});
