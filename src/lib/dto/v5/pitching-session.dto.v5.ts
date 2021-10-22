import { AbstractSensorSessionResponseV5 } from './abstract-sensor-session.dto.v5';
import { CollectionResponseV5 } from './collection.dto.v5';

export interface PitchingSessionResponseV5 extends AbstractSensorSessionResponseV5 {
	name: string;
	flagged: boolean;
	searchable: boolean;
}

export interface PitchingSessionCollectionResponseV5 extends CollectionResponseV5<PitchingSessionResponseV5> {}
