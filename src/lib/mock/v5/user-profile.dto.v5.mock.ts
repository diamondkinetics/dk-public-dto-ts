import { define, extend } from 'cooky-cutter';
import { address, date, helpers, internet, name, random } from 'faker';

import { AbstractSyncableResponseV5, AbstractSyncableUpdateRequestV5 } from './../../dto/v5/abstract-syncable.dto.v5';
import {
    AdminUserProfileCollectionResponseV5,
    AdminUserProfileResponseV5,
    AdminUserProfileUpdateRequestV5,
    UserProfileCollectionResponseV5,
    UserProfileEnhancedResponseV5,
    UserProfileResponseV5,
    UserProfileUpdateRequestV5
} from './../../dto/v5/user-profile.dto.v5';
import { BattingOrientation } from './../../enum/batting-orientation';
import { PlayType } from './../../enum/play-type';
import { Position } from './../../enum/position';
import { mockAbstractSyncableResponseV5, mockAbstractSyncableUpdateRequestV5 } from './abstract-syncable.dto.v5.mock';
import { mockHittingUserAccountResponseV5, mockPitchingUserAccountResponseV5 } from './user-account.dto.v5.mock';
import { mockCollectionResponseV5 } from './collection.dto.v5.mock';

export const mockUserProfileUpdateRequestV5 = extend<AbstractSyncableUpdateRequestV5, UserProfileUpdateRequestV5>(
    mockAbstractSyncableUpdateRequestV5,
    {
        playType: () => helpers.randomize(PlayType.asArray(true).map(pt => pt.getName())),
        battingOrientation: () => helpers.randomize(BattingOrientation.asArray().map(bo => bo.getName())),
        throwsHandedness: () => helpers.randomize(BattingOrientation.asArray(true).map(bo => bo.getName())),
        competitionLevelUuid: () => random.uuid(),
        weight: () => random.number({max: 200, min: 100, precision: 0.1}).toString(),
        height: () => random.number({max: 200, min: 100, precision: 0.1}).toString(),
        zipCode: () => random.number({max: 99999, min: 1000, precision: 1}).toString(),
        birthDate: () => date.past().toDateString(),
        nickname: () => internet.userName(),
        parentalConsent: () => random.boolean()
    }
);

export const mockAdminUserProfileUpdateRequestV5 = extend<
    UserProfileUpdateRequestV5,
    AdminUserProfileUpdateRequestV5
>(
    mockUserProfileUpdateRequestV5,
    {
        accountType: () => helpers.randomize(['MLB', 'Ripken']),
        emailVerified: () => random.boolean(),
        deleted: () => random.boolean(),
        coach: () => random.boolean(),
        email: () => internet.email(),
        firstName: () => name.firstName(),
        lastName: () => name.lastName()
    }
);

export const mockUserProfileResponseV5 = extend<AbstractSyncableResponseV5, UserProfileResponseV5>(
    mockAbstractSyncableResponseV5,
    {
        primaryEmail: () => internet.email(),
        nickname: () => internet.userName(),
        firstName: () => name.firstName(),
        lastName: () => name.lastName(),
        secondaryEmail: () => internet.email(),
        preferences: () => '',
        bouncing: () => random.boolean(),
        secondaryBouncing: () => random.boolean(),
        birthDate: () => date.past(15).toISOString(),
        height: () => random.number({max: 84, min: 36, precision: 1}).toString(),
        weight: () => random.number({max: 300, min: 50, precision: 1}).toString(),
        playType: () => helpers.randomize(PlayType.asArray(true).map(pt => pt.getName())),
        battingOrientation: () => helpers.randomize(BattingOrientation.asArray().map(bo => bo.getName())),
        throwsHandedness: () => helpers.randomize(BattingOrientation.asArray(true).map(bo => bo.getName())),
        competitionLevelUuid: () => random.uuid(),
        coach: () => random.boolean(),
        privateProfile: () => random.boolean(),
        zipCode: () => address.zipCode(),
        profileImageUrl: () => internet.avatar(),
        userMetaData: () => '',
        youthRegistration: () => random.boolean(),
        referringOrganizationUuid: () => random.uuid(),
        state: () => address.stateAbbr(),
        graduationYear: () => date.future(8).getFullYear.toString(),
        position: () => helpers.randomize(Position.asArray().map(p => p.getName())),
        mlbId: () => random.uuid(),
        hittingAccount: () => mockHittingUserAccountResponseV5(),
        pitchingAccount: () => mockPitchingUserAccountResponseV5()
    }
);

export const mockUserProfileEnhancedResponseV5 = extend<UserProfileResponseV5, UserProfileEnhancedResponseV5>(
    mockUserProfileResponseV5,
    { customerId: () => random.alphaNumeric(10) }
);

export const mockAdminUserProfileResponseV5 = extend<UserProfileEnhancedResponseV5, AdminUserProfileResponseV5>(
    mockUserProfileEnhancedResponseV5,
    {
        accountType: () => helpers.randomize(['MLB', 'Ripken']),
        emailVerified: () => random.boolean()
    }
);

export const mockUserProfileCollectionResponseV5 = define<UserProfileCollectionResponseV5>(
    mockCollectionResponseV5<UserProfileResponseV5>(mockUserProfileResponseV5)()
);

export const mockAdminUserProfileCollectionResponseV5 = define<AdminUserProfileCollectionResponseV5>(
    mockCollectionResponseV5<AdminUserProfileResponseV5>(mockAdminUserProfileResponseV5)()
);
