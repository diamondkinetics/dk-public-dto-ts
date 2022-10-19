import { UserCredentialCreateRequestV6 } from './user-credential-create-request-v6';
import { UserProfileCreateRequestNoCredentialsV6 } from './user-profile-create-request-no-credentials-v6';

export interface UserProfileCreateRequestV6 extends UserProfileCreateRequestNoCredentialsV6 {
  credentials?: UserCredentialCreateRequestV6;
}
