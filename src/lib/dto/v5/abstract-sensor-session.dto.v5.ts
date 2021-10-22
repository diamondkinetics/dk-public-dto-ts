import { AbstractUserOwnedResponseV5 } from './abstract-user-owned.dto.v5';
import { AbstractSensorEventCollectionResponseSummaryV5 } from './abstract-sensor-event.dto.v5';

export interface AbstractSensorSessionResponseV5 extends AbstractUserOwnedResponseV5 {
	competitionLevelUuid: string;
	userUuid: string;
	extensionType: string;
	extensionDetails: { [name: string]: object };
	playType: string;
	notes: string;
	events: AbstractSensorEventCollectionResponseSummaryV5[];
	associatedGroupUuid: string;
	extensionClass: string;
}
