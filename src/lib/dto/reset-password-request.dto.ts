export interface ResetPasswordRequestDTO {
	email: string;
	username?: string;
	oldPassword?: string;
	forgotOldPasswordSecret?: string;
	newPassword: string;
}
