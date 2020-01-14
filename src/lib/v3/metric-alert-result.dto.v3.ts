import { MetricAlertDTOV3 } from './metric-alert.dto.v3';
import { UserProfileBasicsDTOV3 } from './user-profile-basics.dto.v3';

export interface MetricAlertResultDTOV3 {
	metricAlert?: MetricAlertDTOV3;
	user?: UserProfileBasicsDTOV3;
	eventDate?: string;
	eventMetricValue?: number;
}
