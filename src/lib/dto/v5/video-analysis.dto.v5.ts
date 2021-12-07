
export interface VideoAnalysisResponseV5 {
	poseEngineVersion: string;
	setPoseEngineStatus: string;
	poseDataUrl: string;
	expertEngineVersion: string;
	processedVideoUrl: string;
	expertEngineQAPass: boolean;
	expertEngineQACode: string;
	poseEngineConfidence: number;
	metricResults: { [key: string]: {} };
	expertAnalysis: { [key: string]: {} };
}
