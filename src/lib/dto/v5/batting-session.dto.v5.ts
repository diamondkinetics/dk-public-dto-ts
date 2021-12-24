import { AbstractSensorSessionResponseV5 } from './abstract-sensor-session.dto.v5';
import { CollectionResponseV5 } from './collection.dto.v5';

export interface BattingSessionResponseV5 extends AbstractSensorSessionResponseV5 {
	userBatUuid: string;
}

export interface BattingSessionCollectionResponseV5 extends CollectionResponseV5<BattingSessionResponseV5> {}
