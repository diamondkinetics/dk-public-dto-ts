export class AccountStatus {

	public static readonly PRE_TRIAL = new AccountStatus('PRE_TRIAL', true, true);
	public static readonly PRE_TRIAL_WITH_CREDIT_CARD = new AccountStatus('PRE_TRIAL_WITH_CREDIT_CARD', true, true);
	public static readonly TRIALING = new AccountStatus('TRIALING', true, true);
	public static readonly TRIALING_WITH_CREDIT_CARD = new AccountStatus('TRIALING_WITH_CREDIT_CARD', true, true);
	public static readonly ABOUT_TO_END_TRIAL = new AccountStatus('ABOUT_TO_END_TRIAL', true, true);
	public static readonly TRIAL_ENDED = new AccountStatus('TRIAL_ENDED', true, true);
	public static readonly PAID = new AccountStatus('PAID', false, false);
	public static readonly EXPIRED = new AccountStatus('EXPIRED', false, false);
	public static readonly CANCELLED = new AccountStatus('CANCELLED', false, false);
	public static readonly PAST_DUE = new AccountStatus('PAST_DUE', false, false);

	constructor(private readonly name: string, private readonly trialing: boolean, private readonly paid: boolean) {}

	public getName(): string {
		return this.name;
	}

	public isTrialing(): boolean {
		return this.trialing;
	}

	public isPaid(): boolean {
		return this.paid;
	}

	public static asArray(): AccountStatus[] {
		return [
			AccountStatus.PRE_TRIAL,
			AccountStatus.PRE_TRIAL_WITH_CREDIT_CARD,
			AccountStatus.TRIALING,
			AccountStatus.TRIALING_WITH_CREDIT_CARD,
			AccountStatus.ABOUT_TO_END_TRIAL,
			AccountStatus.TRIAL_ENDED,
			AccountStatus.PAID,
			AccountStatus.EXPIRED,
			AccountStatus.CANCELLED,
			AccountStatus.PAST_DUE
		];
	}

}
