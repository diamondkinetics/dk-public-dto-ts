export const EventSources = ['SWING', 'SWING_VIDEO', 'PITCH', 'PITCH_VIDEO', 'PITCH_CHART'] as const;
export type EventSource = (typeof EventSources)[number];
