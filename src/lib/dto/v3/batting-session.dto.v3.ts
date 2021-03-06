import { AbstractSensorSessionDTOV3 } from './abstract-sensor-session.dto.v3';
import { SwingDTOV3 } from './swing.dto.v3';

export interface BattingSessionDTOV3 extends AbstractSensorSessionDTOV3<SwingDTOV3> {
	footCalibrationUuid?: string;
	batCalibrationUuid: string;
	rightyLoadPositionUuid?: string;
	leftyLoadPositionUuid?: string;
	challengeActivityUuid?: string;
	userBatUuid?: string;
	userBatConfigUuid?: string;
	sessionType?: string;
	pitchType?: string;
	hittingGoal?: string;
}
