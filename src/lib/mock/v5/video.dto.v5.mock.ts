import { extend } from 'cooky-cutter';
import { helpers, internet, random } from 'faker';

import { AbstractUserOwnedResponseV5 } from './../../dto/v5/abstract-user-owned.dto.v5';
import { VideoResponseV5 } from './../../dto/v5/video.dto.v5';
import { mockAbstractUserOwnedResponseV5 } from './abstract-user-owned.dto.v5.mock';
import { mockVideoAnalysisResponseV5 } from './video-analysis.dto.v5.mock';

export const mockVideoResponseV5 = extend<AbstractUserOwnedResponseV5, VideoResponseV5>(
    mockAbstractUserOwnedResponseV5,
    {
        url: () => internet.url(),
        finishedUploading: () => random.boolean(),
        fileSize: () => random.number(100000),
        processedUrl: () => internet.url(),
        events: () => ({ event: random.number(10) }),
        height: () => random.number({min: 320, max: 3840, precision: 1}),
        width: () => random.number({min: 414, max: 3840, precision: 1}),
        strikeZoneHeight: () => random.number({min: 0, max: 320, precision: 0.00001}),
        strikeZoneWidth: () => random.number({min: 0, max: 414, precision: 0.00001}),
        strikeZoneX: () => random.number({min: -500, max: 3840, precision: 0.00001}),
        strikeZoneY: () => random.number({min: -500, max: 3840, precision: 0.00001}),
        camera: () => helpers.randomize(['REAR', 'FRONT']),
        perspective: () => helpers.randomize(['BALL_FLIGHT', 'DELIVERY']),
        framesPerSecond: 0,
        deviceModel: '',
        captureSettings: () => ({ 'setting': {} }),
        analysis: () => mockVideoAnalysisResponseV5()
    }
);
