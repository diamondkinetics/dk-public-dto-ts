import { DisplayChart } from './../../../types/display-chart';
import { DisplayMetric } from './../../../types/display-metric';
import { EventSource } from './../../../types/event-source';
import { VideoBlockType } from './../../../types/video-block-type';
import { AdvanceConditionCreateRequestV6 } from './advance-condition-create-request-v6';

export interface VideoBlockCreateRequestV6 {
  type: VideoBlockType;
  eventSource: EventSource;
  displayMetric?: DisplayMetric;
  displayChart?: DisplayChart;
  videoUrl: string;
  advanceCondition: AdvanceConditionCreateRequestV6;
  blockIndex: number;
}
