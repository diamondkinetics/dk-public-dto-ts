export interface DynamicVideoBlockAssetResponseV6 {
  event: Record<string, string[]>[];
  personalBest: string[];
  positiveStreak: Record<number, string[]>;
  negativeStreak: Record<number, string[]>;
  blockExpectationComplete: string[][];
  pressure: string[];
  cadence: string[];
}
