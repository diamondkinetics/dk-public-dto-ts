import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import { AbstractReadableResponseV5, CollectionResponseSummaryV5, CollectionResponseV5 } from "../../dto";

export const mockCollectionResponseSummaryV5 = cookyCutter.define<CollectionResponseSummaryV5>({
    totalCount: faker.random.number({max: 100, min: 1, precision: 1})
});

export const mockCollectionResponseV5 = <RESPONSE extends AbstractReadableResponseV5> (mockResponse: cookyCutter.Factory<RESPONSE>) => {
    const pageSize: number = 20;
    const total: number = faker.random.number({max: 100, min: 1, precision: 1});
    const totalPages: number = Math.ceil(total / pageSize);

    return cookyCutter.define<CollectionResponseV5<any>>({
        ...mockCollectionResponseSummaryV5(),
        pageNumber: faker.random.number({max: totalPages, min: 1, precision: 1}),
        pageSize,
        totalPages,
        data: Array.from({length: total}, () => mockResponse())
    });
}