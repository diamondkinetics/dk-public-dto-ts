import { define } from 'cooky-cutter';
import { helpers, internet, random } from 'faker';

import { VideoAnalysisResponseV5 } from './../../dto/v5/video-analysis.dto.v5';

const mockMetricResults = define<{ [key: string]: any }>({
    "ind": () => random.number({max: 200, min: 1, precision: 1}),
    "label": () => random.words(),
    "score": 0.4,
    "value": null,
    "parents": () => ([
        {
            "ind": () => random.number({max: 10, min: 1, precision: 1}),
            "name": () => random.word(),
            "thresh": null,
            "max_goal": null,
            "min_goal": null
        },
        {
            "ind": () => random.number({max: 10, min: 1, precision: 1}),
            "name": () => random.word(),
            "thresh": null,
            "max_goal": null,
            "min_goal": null
        },
        {
            "ind": () => random.number({max: 10, min: 1, precision: 1}),
            "name": () => random.word(),
            "thresh": null,
            "max_goal": null,
            "min_goal": null
        }
    ]),
    "children": null,
    "identity": () => ({
        "ind": () => random.number({max: 10, min: 1, precision: 1}),
        "name": () => random.word(),
        "thresh": () => random.number({max: 1, min: 0, precision: 0.01}),
        "max_goal": () => null,
        "min_goal": () => null
    }),
    "ind_range": null
});

export const mockVideoAnalysisResponseV5 = define<VideoAnalysisResponseV5>({
    poseEngineVersion: () => random.number({max: 3, min: 0, precision: 0.1}).toString(),
    setPoseEngineStatus: () => helpers.randomize<string>(['FAILURE', 'SUCCESS']),
    poseDataUrl: () => internet.url(),
    expertEngineVersion: () => random.number({max: 3, min: 0, precision: 0.1}).toString(),
    processedVideoUrl: () => internet.url(),
    expertEngineQAPass: () => random.boolean(),
    expertEngineQACode: () => helpers.randomize<string>(['SHORT_STRIDE', 'NO_EXTENSION', 'UNKNOWN']),
    poseEngineConfidence: () => random.number({max: 1, min: 0, precision: 0.00001}),
    metricResults: () => ({
        'arm_slot': () => mockMetricResults(),
        'sequence': () => mockMetricResults(),
        'foot_plant': () => mockMetricResults(),
        'hips_start': () => mockMetricResults(),
        'arm_alignment': () => mockMetricResults(),
        'lead_knee_ext': () => mockMetricResults(),
        'lead_knee_flex': () => mockMetricResults(),
        'lead_arm_height': () => mockMetricResults(),
        'pitch_arm_start': () => mockMetricResults(),
        'shoulders_start': () => mockMetricResults(),
        'pitch_arm_height': () => mockMetricResults(),
        'pitch_elbow_flex': () => mockMetricResults()
    }),
    expertAnalysis: () => ({
        "max_arm_slot": () => random.number({max: 1, min: 0, precision: 0.0000000000000001}),
        "lead_arm_alignment": () => random.number({max: 1, min: 0, precision: 0.0000000000000001}),
        "lead_arm_alignment_tip": () => random.words(),
        "pitching_elbow_flexion": () => random.number({max: 1, min: 0, precision: 0.0000000000000001}),
        "max_arm_slot_description": () => random.words(3),
        "pitching_elbow_flexion_tip": () => random.words(),
        "hips_shoulders_arm_sequence": () => random.number({max: 1, min: 0, precision: 0.1}),
        "lead_arm_alignment_description": () => random.words(2),
        "hips_shoulders_arm_sequence_tip": () => random.words(),
        "pitching_elbow_flexion_description": () => random.words(),
        "hips_shoulders_arm_sequence_description": () => random.words()
    })
});
