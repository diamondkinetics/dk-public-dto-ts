import { AdvanceConditionType } from './../../../types/advance-condition-type';

export interface AdvanceConditionUpdateRequestV6 {
  condition: AdvanceConditionType;
  threshold: number;
}
