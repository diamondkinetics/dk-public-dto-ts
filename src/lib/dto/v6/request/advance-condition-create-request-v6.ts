import { AdvanceConditionType } from './../../../types/advance-condition-type';

export interface AdvanceConditionCreateRequestV6 {
  condition: AdvanceConditionType;
  threshold: number;
}
