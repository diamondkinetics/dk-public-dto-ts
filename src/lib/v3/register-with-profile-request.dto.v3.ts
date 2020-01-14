import { BattingOrientation } from './../enum/batting-orientation';
import { PlayType } from './../enum/play-type';
import { EventDTOV2, UserBatDTOV2 } from './../v2';
import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';

export interface RegisterWithProfileRequestDTOV3 extends AbstractSyncableDTOV3 {
	email?: string;
	password: string;
	username?: string;
	secondaryEmail?: string;
	firstName: string;
	lastName: string;
	coach: boolean;
	batsHandedness?: BattingOrientation;
	throwsHandedness?: BattingOrientation;
	profileImageUrl?: string;
	zipCode?: string;
	playType?: PlayType;
	competitionLevelUuid?: string;
	birthDate?: string;
	height?: string;
	weight?: string;
	source?: string;
	privateProfile?: boolean;
	event?: EventDTOV2;
	teamName?: string;
	teamUuid?: string;
	groupUuids?: string[];
	userBats?: UserBatDTOV2[];
}
