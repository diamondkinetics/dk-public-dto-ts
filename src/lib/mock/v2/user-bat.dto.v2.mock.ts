import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { UserBatDTOV2 } from './../../dto';
import { MaterialType } from './../../enum/material-type';

import { mockAbstractSyncableDTOV2 } from './abstract-syncable.dto.v2.mock';
import { mockBatModelDTOV2 } from './bat-model.dto.v2.mock';

export const mockUserBatDTOV2 = cookyCutter.define<UserBatDTOV2>({
	...mockAbstractSyncableDTOV2(),
	userUuid: faker.random.uuid(),
	name: 'The bazooka',
	model: mockBatModelDTOV2(),
	length: 34,
	weight: 31,
	price: faker.random.number(400),
	materialType: MaterialType.ALUMINUM.getName(),
	embedded: mockBatModelDTOV2().embedded
});
