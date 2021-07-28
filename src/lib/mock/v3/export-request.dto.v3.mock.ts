import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { ExportEventType } from './../../enum';
import { ExportEventSource } from './../../enum';
import { ExportRequestDTOV3 } from './../../dto/v3';
import { mockAbstractSyncableDTOV3 } from './abstract-syncable.dto.v3.mock';
import { mockGroupDTOV4 } from '../v4';
import { mockUserProfileBasicsDTOV3 } from './../v3';

export const mockExportRequestDTOV3 = cookyCutter.define<ExportRequestDTOV3>({
	...mockAbstractSyncableDTOV3(),
	eventSource: () => ExportEventSource.asArray()[faker.random.number(1)].getName(),
	eventType: () => ExportEventType.asArray()[faker.random.number(1)].getName(),
	groupUuid: () => mockGroupDTOV4().uuid ?? faker.random.uuid(),
	includeCoaches: () => faker.random.boolean(),
	requestingUser: () => mockUserProfileBasicsDTOV3()
});
