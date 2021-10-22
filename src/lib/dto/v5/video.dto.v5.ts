import { AbstractUserOwnedResponseV5 } from './abstract-user-owned.dto.v5';
import { VideoAnalysisResponseV5 } from './video-analysis.dto.v5';

export interface VideoResponseV5 extends AbstractUserOwnedResponseV5 {
	url: string;
	finishedUploading: boolean;
	fileSize: number;
	processedUrl: string;
	events: { [name: string]: number };
	height: number;
	width: number;
	strikeZoneHeight: number;
	strikeZoneWidth: number;
	strikeZoneX: number;
	strikeZoneY: number;
	camera: string;
	perspective: string;
	framesPerSecond: number;
	deviceModel: string;
	captureSettings: { [name: string]: object };
	analysis: VideoAnalysisResponseV5;
}
