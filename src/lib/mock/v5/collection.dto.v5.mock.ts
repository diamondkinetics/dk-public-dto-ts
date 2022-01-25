import { array, define, extend, Factory } from 'cooky-cutter';
import { random } from 'faker';

import { AbstractReadableResponseV5 } from './../../dto/v5/abstract-readable.dto.v5';
import { CollectionResponseSummaryV5, CollectionResponseV5 } from './../../dto/v5/collection.dto.v5';

export const mockCollectionResponseSummaryV5 = define<CollectionResponseSummaryV5>({
    totalCount: random.number({ max: 100, min: 1, precision: 1 })
});

export const mockCollectionResponseV5 = <RESPONSE extends AbstractReadableResponseV5>(mockResponse: Factory<RESPONSE>) => {
    const pageSize: number = 20;
    const total = () => random.number({ max: 100, min: 1, precision: 1 });
    const totalPages = Math.ceil(total() / pageSize);
    const data = array(mockResponse, total());

    return extend<CollectionResponseSummaryV5, CollectionResponseV5<any>>(
        mockCollectionResponseSummaryV5,
        {
            pageNumber: () => random.number({ max: totalPages, min: 1, precision: 1 }),
            pageSize,
            totalPages,
            data
        }
    );
}
