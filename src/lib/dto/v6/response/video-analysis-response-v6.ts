import { AbstractUserOwnedResponseV6 } from './abstract-user-owned-response-v6';

export interface VideoAnalysisResponseV6 extends AbstractUserOwnedResponseV6 {
  videoUuid?: string;
  poseEngineVersion?: string;
  setPoseEngineStatus?: string;
  poseDataUrl?: string;
  expertEngineVersion?: string;
  processedVideoUrl?: string;
  expertEngineQAPass?: boolean;
  expertEngineQACode?: string;
  poseEngineConfidence?: number;
  metricResults?: Record<string, any>;
  expertAnalysis?: Record<string, any>;
}
