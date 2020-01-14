export interface EventDTOV2 {
	uuid: string;
	name: string;
	startDate: string;
	endDate: string;
	competitionLevelUuid: string;
	sport: string;
	groupUuid?: string;
	competitionLevelName?: string;
	description?: string;
	resultsSent?: boolean;
}
