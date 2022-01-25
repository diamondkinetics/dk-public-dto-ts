import { define } from 'cooky-cutter';
import { date } from 'faker';

import { AbstractTimestampResponseV5 } from './../../dto/v5/abstract-timestamp.dto.v5';


export const mockAbstractTimeStampResponseV5 = define<AbstractTimestampResponseV5>({
    serverCreatedTime: () => date.past(1).toISOString(),
    serverUpdatedTime: () => date.past(0.5).toISOString()
});
