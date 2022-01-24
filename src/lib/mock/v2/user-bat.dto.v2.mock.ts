import { extend } from 'cooky-cutter';
import { helpers, random } from 'faker';

import { AbstractSyncableDTOV2 } from './../../dto/v2/abstract-syncable.dto.v2';
import { UserBatDTOV2 } from './../../dto/v2/user-bat.dto.v2';
import { MaterialType } from './../../enum/material-type';
import { mockAbstractSyncableDTOV2 } from './abstract-syncable.dto.v2.mock';
import { mockBatModelDTOV2 } from './bat-model.dto.v2.mock';

const batModel = () => mockBatModelDTOV2();

export const mockUserBatDTOV2 = extend<AbstractSyncableDTOV2, UserBatDTOV2>(
	mockAbstractSyncableDTOV2,
	{
		userUuid: () => random.uuid(),
		name: () => 'The bazooka',
		model: () => batModel(),
		length: () => 34,
		weight: () => 31,
		price: () => random.number(400),
		materialType: () => helpers.randomize(MaterialType.asArray().map(mt => mt.getName())),
		embedded: () => batModel().embedded
	}
);
