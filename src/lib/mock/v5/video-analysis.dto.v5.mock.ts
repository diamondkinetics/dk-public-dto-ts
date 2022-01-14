import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import { VideoAnalysisResponseV5 } from "../../dto";

const mockMetricResults = cookyCutter.define<{ [key: string]: any }>({
    "ind": faker.random.number({max: 200, min: 1, precision: 1}),
    "label": faker.random.words(),
    "score": 0.4,
    "value": null,
    "parents": () => ([
        {
            "ind": faker.random.number({max: 10, min: 1, precision: 1}),
            "name": faker.random.word(),
            "thresh": null,
            "max_goal": null,
            "min_goal": null
        },
        {
            "ind": faker.random.number({max: 10, min: 1, precision: 1}),
            "name": faker.random.word(),
            "thresh": null,
            "max_goal": null,
            "min_goal": null
        },
        {
            "ind": faker.random.number({max: 10, min: 1, precision: 1}),
            "name": faker.random.word(),
            "thresh": null,
            "max_goal": null,
            "min_goal": null
        }
    ]),
    "children": null,
    "identity": () => ({
        "ind": faker.random.number({max: 10, min: 1, precision: 1}),
        "name": faker.random.word(),
        "thresh": faker.random.number({max: 1, min: 0, precision: 0.01}),
        "max_goal": null,
        "min_goal": null
    }),
    "ind_range": null
});

export const mockVideoAnalysisResponseV5 = cookyCutter.define<VideoAnalysisResponseV5>({
    poseEngineVersion: faker.random.number({max: 3, min: 0, precision: 0.1}).toString(),
    setPoseEngineStatus: faker.helpers.randomize<string>(['FAILURE', 'SUCCESS']),
    poseDataUrl: faker.internet.url(),
    expertEngineVersion: faker.random.number({max: 3, min: 0, precision: 0.1}).toString(),
    processedVideoUrl: faker.internet.url(),
    expertEngineQAPass: faker.random.boolean(),
    expertEngineQACode: faker.helpers.randomize<string>(['SHORT_STRIDE', 'NO_EXTENSION', 'UNKNOWN']),
    poseEngineConfidence: faker.random.number({max: 1, min: 0, precision: 0.00001}),
    metricResults: () => ({
                        'arm_slot': mockMetricResults(),
                        'sequence': mockMetricResults(),
                        'foot_plant': mockMetricResults(),
                        'hips_start': mockMetricResults(),
                        'arm_alignment': mockMetricResults(),
                        'lead_knee_ext': mockMetricResults(),
                        'lead_knee_flex': mockMetricResults(),
                        'lead_arm_height': mockMetricResults(),
                        'pitch_arm_start': mockMetricResults(),
                        'shoulders_start': mockMetricResults(),
                        'pitch_arm_height': mockMetricResults(),
                        'pitch_elbow_flex': mockMetricResults()
                    }),
    expertAnalysis: () => ({
                        "max_arm_slot": faker.random.number({max: 1, min: 0, precision: 0.0000000000000001}),
                        "lead_arm_alignment": faker.random.number({max: 1, min: 0, precision: 0.0000000000000001}),
                        "lead_arm_alignment_tip": faker.random.words(),
                        "pitching_elbow_flexion": faker.random.number({max: 1, min: 0, precision: 0.0000000000000001}),
                        "max_arm_slot_description": faker.random.words(3),
                        "pitching_elbow_flexion_tip": faker.random.words(),
                        "hips_shoulders_arm_sequence": faker.random.number({max: 1, min: 0, precision: 0.1}),
                        "lead_arm_alignment_description": faker.random.words(2),
                        "hips_shoulders_arm_sequence_tip": faker.random.words(),
                        "pitching_elbow_flexion_description": faker.random.words(),
                        "hips_shoulders_arm_sequence_description": faker.random.words()
                    })
});