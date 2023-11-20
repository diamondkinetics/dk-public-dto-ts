import { AbstractUserOwnedResponseV6 } from './abstract-user-owned-response-v6';
import { VideoAnalysisResponseV6 } from './video-analysis-response-v6';

export interface VideoResponseV6 extends AbstractUserOwnedResponseV6 {
  url?: string;
  finishedUploading?: boolean;
  fileSize?: number;
  processedUrl?: string;
  events?: Record<string, number>,
  height?: number;
  width?: number;
  strikeZoneHeight?: number;
  strikeZoneWidth?: number;
  strikeZoneX?: number;
  strikeZoneY?: number;
  camera?: string;
  perspective?: string;
  framesPerSecond?: number;
  deviceModel?: string;
  captureSettings?: Record<string, any>;
  analysis?: VideoAnalysisResponseV6;
}
