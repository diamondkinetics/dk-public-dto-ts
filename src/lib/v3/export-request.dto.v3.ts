import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';
import { UserProfileBasicsDTOV3 } from './user-profile-basics.dto.v3';

export interface ExportRequestDTOV3 extends AbstractSyncableDTOV3 {
	requestingUser: UserProfileBasicsDTOV3;
	name?: string;
	eventSource: string;
	eventType: string;
	templateId?: string;
	spreadsheetId?: string;
	url?: string;
	groupUuid: string;
	exportRequestUserUuids?: string[];
	startDate?: string;
	endDate?: string;
	includeCoaches: boolean;
}
