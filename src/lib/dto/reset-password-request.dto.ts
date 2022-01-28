export interface ResetPasswordRequestDTO {
	email: string;
	username?: string;
	oldPassword?: string;
	forgotPasswordSecret?: string;
	newPassword: string;
}
