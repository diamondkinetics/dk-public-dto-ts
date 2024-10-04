import { DisplayChart } from './../../../types/display-chart';
import { DisplayMetric } from './../../../types/display-metric';
import { EventSource } from './../../../types/event-source';
import { VideoBlockType } from './../../../types/video-block-type';
import { AdvanceConditionUpdateRequestV6 } from './advance-condition-update-request-v6';

export interface VideoBlockUpdateRequestV6 {
  type: VideoBlockType;
  eventSource: EventSource;
  displayMetric?: DisplayMetric;
  displayChart?: DisplayChart;
  videoUrl: string;
  advanceCondition: AdvanceConditionUpdateRequestV6;
  blockIndex: number;  
}
