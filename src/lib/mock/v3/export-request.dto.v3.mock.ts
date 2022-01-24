import { extend } from 'cooky-cutter';
import { helpers, random } from 'faker';

import { ExportEventType } from './../../enum/export-event-type';
import { ExportEventSource } from './../../enum/export-event-source';
import { AbstractSyncableDTOV3 } from './../../dto/v3/abstract-syncable.dto.v3';
import { ExportRequestDTOV3 } from './../../dto/v3/export-request.dto.v3';
import { mockAbstractSyncableDTOV3 } from './abstract-syncable.dto.v3.mock';
import { mockGroupDTOV4 } from '../v4/group.dto.v4.mock';
import { mockUserProfileBasicsDTOV3 } from './../v3/user-profile-basics.dto.v3.mock';

export const mockExportRequestDTOV3 = extend<AbstractSyncableDTOV3, ExportRequestDTOV3>(
	mockAbstractSyncableDTOV3,
	{
		eventSource: () => helpers.randomize(ExportEventSource.asArray().map(s => s.getName())),
		eventType: () => helpers.randomize(ExportEventType.asArray().map(t => t.getName())),
		groupUuid: () => mockGroupDTOV4().uuid ?? random.uuid(),
		includeCoaches: () => random.boolean(),
		requestingUser: () => mockUserProfileBasicsDTOV3()
	}
);
