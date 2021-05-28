import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';
import { EventDTOV2 } from './event.dto.v2';

export interface RegisterWithProfileRequestDTOV2 extends AbstractSyncableDTOV2 {
	firstName: string;
	lastName: string;
	email?: string;
	secondaryEmail?: string;
	username?: string;
	password: string;
	preferences?: string;
	competitionLevelUuid?: string;
	coach: boolean;
	zipCode?: string;
	birthDate?: string;
	height?: string;
	weight?: string;
	profileImageUrl?: string;
	battingOrientation?: string;
	playType?: string;
	hittingGoal?: number;
	privateProfile?: boolean;
	userMetaData?: string;
	event?: EventDTOV2;
	teamName?: string | null;
	teamUuid?: string | null;
	source?: string | null;
}
