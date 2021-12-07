import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import { VideoResponseV5 } from "../../dto";
import { mockAbstractUserOwnedResponseV5 } from "./abstract-user-owned.dto.v5.mock";
import { mockVideoAnalysisResponseV5 } from "./video-analysis.dto.v5.mock";

export const mockVideoResponseV5 = cookyCutter.define<VideoResponseV5>({
    ...mockAbstractUserOwnedResponseV5(),
    url: faker.internet.url(),
    finishedUploading: faker.random.boolean(),
    fileSize: faker.random.number(100000),
    processedUrl: faker.internet.url(),
    events: {'event': faker.random.number(10)},
    height: faker.random.number({min: 320, max: 3840, precision: 1}),
    width: faker.random.number({min: 414, max: 3840, precision: 1}),
    strikeZoneHeight: faker.random.number({min: 0, max: 320, precision: 0.00001}),
    strikeZoneWidth: faker.random.number({min: 0, max: 414, precision: 0.00001}),
    strikeZoneX: faker.random.number({min: -500, max: 3840, precision: 0.00001}),
    strikeZoneY: faker.random.number({min: -500, max: 3840, precision: 0.00001}),
    camera: faker.helpers.randomize(['REAR', 'FRONT']),
    perspective: faker.helpers.randomize(['BALL_FLIGHT', 'DELIVERY']),
    framesPerSecond: 0,
    deviceModel: '',
    captureSettings: { 'setting': {} },
    analysis: mockVideoAnalysisResponseV5()
});