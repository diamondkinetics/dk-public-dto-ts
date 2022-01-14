import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import {
    AdminUserProfileCollectionResponseV5,
    AdminUserProfileResponseV5,
    AdminUserProfileUpdateRequestV5,
    UserProfileCollectionResponseV5,
    UserProfileEnhancedResponseV5,
    UserProfileResponseV5,
    UserProfileUpdateRequestV5
} from "../../dto";
import { BattingOrientation, PlayType, Position, SubscriptionType } from "../../enum";
import {
    mockAbstractSyncableResponseV5,
    mockAbstractSyncableUpdateRequestV5 } from "./abstract-syncable.dto.v5.mock";
import { mockCollectionResponseV5 } from "./collection.dto.v5.mock";
import { mockHittingUserAccountResponseV5, mockPitchingUserAccountResponseV5 } from "./user-account.dto.v5.mock";

export const mockUserProfileUpdateRequestV5 = cookyCutter.define<UserProfileUpdateRequestV5>({
    ...mockAbstractSyncableUpdateRequestV5(),
    playType: faker.helpers.randomize([PlayType.BASEBALL.getName(), PlayType.FAST_PITCH_SOFTBALL.getName()]),
    battingOrientation: faker.helpers.randomize(['Righty', 'Lefty']),
    throwsHandedness: faker.helpers.randomize(['Righty', 'Lefty']),
    competitionLevelUuid: faker.random.uuid(),
    weight: faker.random.number({max: 200, min: 100, precision: 0.1}).toString(),
    height: faker.random.number({max: 200, min: 100, precision: 0.1}).toString(),
    zipCode: faker.random.number({max: 99999, min: 1000, precision: 1}).toString(),
    birthDate: faker.date.past().toDateString(),
    nickname: faker.internet.userName(),
    parentalConsent: faker.random.boolean()
});

export const mockAdminUserProfileUpdateRequestV5 = cookyCutter.define<AdminUserProfileUpdateRequestV5>({
    ...mockUserProfileUpdateRequestV5(),
    accountType: faker.helpers.randomize(['MLB', 'Ripken']),
    emailVerified: faker.random.boolean(),
    deleted: faker.random.boolean(),
    coach: faker.random.boolean(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
});

export const mockUserProfileResponseV5 = cookyCutter.define<UserProfileResponseV5>({
    ...mockAbstractSyncableResponseV5(),
    primaryEmail: faker.internet.email(),
    nickname: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    secondaryEmail: faker.internet.email(),
    preferences: '',
    bouncing: faker.random.boolean(),
    secondaryBouncing: faker.random.boolean(),
    birthDate: faker.date.past(15).toISOString(),
    height: faker.random.number({max: 84, min: 36, precision: 1}).toString(),
    weight: faker.random.number({max: 300, min: 50, precision: 1}).toString(),
    playType: PlayType.BASEBALL.getName(),
    battingOrientation: BattingOrientation.RIGHTY.getName(),
    throwsHandedness: BattingOrientation.RIGHTY.getName(),
    competitionLevelUuid: faker.random.uuid(),
    coach: faker.random.boolean(),
    privateProfile: faker.random.boolean(),
    zipCode: faker.address.zipCode(),
    profileImageUrl: faker.internet.avatar(),
    userMetaData: '',
    youthRegistration: faker.random.boolean(),
    referringOrganizationUuid: faker.random.uuid(),
    state: faker.address.stateAbbr(),
    graduationYear: faker.date.future(8).getFullYear.toString(),
    position: Position.CENTER_FIELD.getName(),
    mlbId: faker.random.uuid(),
    hittingAccount: mockHittingUserAccountResponseV5(),
    pitchingAccount: mockPitchingUserAccountResponseV5()
});

export const mockUserProfileEnhancedResponseV5 = cookyCutter.define<UserProfileEnhancedResponseV5>({
    ...mockUserProfileResponseV5(),
    customerId: faker.random.alphaNumeric(10)
});

export const mockAdminUserProfileResponseV5 = cookyCutter.define<AdminUserProfileResponseV5>({
    ...mockUserProfileEnhancedResponseV5(),
    accountType: faker.helpers.randomize(['MLB', 'Ripken']),
    emailVerified: faker.random.boolean()
});

export const mockUserProfileCollectionResponseV5 = cookyCutter.define<UserProfileCollectionResponseV5>({
    ...mockCollectionResponseV5<UserProfileResponseV5>(mockUserProfileResponseV5)()
});

export const mockAdminUserProfileCollectionResponseV5 = cookyCutter.define<AdminUserProfileCollectionResponseV5>({
    ...mockCollectionResponseV5<AdminUserProfileResponseV5>(mockAdminUserProfileResponseV5)()
});
