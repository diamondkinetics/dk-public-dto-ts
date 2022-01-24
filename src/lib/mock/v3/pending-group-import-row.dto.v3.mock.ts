import { define, sequence } from 'cooky-cutter';
import { company } from 'faker';

import { PendingGroupImportRowDTOV3 } from './../../dto/v3/pending-group-import-row.dto.v3';

export const mockPendingGroupImportRowDTOV3 = define<PendingGroupImportRowDTOV3>({
	rowNumber: sequence,
	values: () => Array.from({ length: 3 }, () => company.bsAdjective())
});
