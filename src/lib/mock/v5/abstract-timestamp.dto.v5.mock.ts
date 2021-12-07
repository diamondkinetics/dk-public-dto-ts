import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import {AbstractTimestampResponseV5} from "../../dto";


export const mockAbstractTimeStampResponseV5 = cookyCutter.define<AbstractTimestampResponseV5>({
    serverCreatedTime: faker.date.past(1).toISOString(),
    serverUpdatedTime: faker.date.past(0.5).toISOString()
});