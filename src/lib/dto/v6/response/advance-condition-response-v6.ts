import { AdvanceConditionType } from './../../../types/advance-condition-type';

export interface AdvanceConditionResponseV6 { 
  condition: AdvanceConditionType;
  threshold: number;
}
