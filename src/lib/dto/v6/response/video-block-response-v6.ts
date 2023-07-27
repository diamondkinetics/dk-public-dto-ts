import { DisplayChart } from './../../../types/display-chart';
import { DisplayMetric } from './../../../types/display-metric';
import { EventSource } from './../../../types/event-source';
import { AdvanceConditionResponseV6 } from './advance-condition-response-v6';

export interface VideoBlockResponseV6 {
  type: string;
  eventSource: EventSource;
  displayMetric: DisplayMetric;
  displayChart: DisplayChart;
  videoUrl: string;
  advanceCondition: AdvanceConditionResponseV6;
  blockIndex: number;
}
