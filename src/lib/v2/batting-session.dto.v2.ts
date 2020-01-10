import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';
import { SwingDTOV2 } from './swing.dto.v2';
import { VideoDTOV2 } from './video.dto.v2';

export interface BattingSessionDTOV2 extends AbstractSyncableDTOV2 {
	date: string;
	battingOrientation: string;
	sessionExtensionType?: string;
	extensionDetails?: string;
	footCalibrationUuid?: string;
	batCalibrationUuid?: string;
	competitionLevelUuid?: string;
	userBatUuid?: string;
	userBatConfigUuid?: string;
	userUuid?: string;
	sessionTypeUuid?: string;
	pitchTypeUuid?: string;
	ballLocationVertical?: number;
	ballLocationHorizontal?: number;
	notes?: string;
	sessionNumber?: number;
	swings: SwingDTOV2[];
	videos: VideoDTOV2[];
	groupUuid?: string;
}
