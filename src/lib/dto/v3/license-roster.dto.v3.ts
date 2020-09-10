import { LicenseDTOV3 } from "./license.dto.v3";

export interface LicenseRosterDTOV3 {
	active: LicenseDTOV3[];
	bench: LicenseDTOV3[];
	licensesPaidForCurrentPeriod?: number;
}
