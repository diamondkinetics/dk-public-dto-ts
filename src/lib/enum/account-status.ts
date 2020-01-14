export enum AccountStatus {
	PRE_TRIAL = 'Pre-trial',
	PRE_TRIAL_WITH_CREDIT_CARD = 'Pre-trial with payment on file',
	TRIALING = 'Trialing',
	TRIALING_WITH_CREDIT_CARD = 'Trialing with payment on file',
	ABOUT_TO_END_TRIAL = 'Trial is about to end',
	TRIAL_ENDED = 'Trial has ended',
	EXPIRED = 'Expired',
	CANCELLED = 'Cancelled',
	PAST_DUE = 'Past due'
}
