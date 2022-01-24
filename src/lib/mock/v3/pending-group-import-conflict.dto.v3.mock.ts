import { define } from 'cooky-cutter';
import { random, helpers } from 'faker';

import { PendingGroupImportConflictDTOV3 } from './../../dto/v3/pending-group-import-conflict.dto.v3';
import { GroupImportConflictType } from './../../enum/group-import-conflict-type';

export const mockPendingGroupImportConflictDTOV3 = define<PendingGroupImportConflictDTOV3>({
	conflictType: () => helpers.randomize(GroupImportConflictType.asArray().map(ct => ct.getName())),
	conflictColumn: () => random.number(20)
});
