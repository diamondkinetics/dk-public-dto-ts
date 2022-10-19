import { UserCredentialCreateRequestV6 } from './user-credential-create-request-v6';
import { UserProfileCreateRequestNoCredentials } from './user-profile-create-request-no-credentials-v6';

export interface UserProfileCreateRequestV6 extends UserProfileCreateRequestNoCredentials {
  credentials?: UserCredentialCreateRequestV6;
}
