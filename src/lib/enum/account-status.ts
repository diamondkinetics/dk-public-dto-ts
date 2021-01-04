export class AccountStatus {

	public static PRE_TRIAL = new AccountStatus('PRE_TRIAL', true, true);
	public static PRE_TRIAL_WITH_CREDIT_CARD = new AccountStatus('PRE_TRIAL_WITH_CREDIT_CARD', true, true);
	public static TRIALING = new AccountStatus('TRIALING', true, true);
	public static TRIALING_WITH_CREDIT_CARD = new AccountStatus('TRIALING_WITH_CREDIT_CARD', true, true);
	public static ABOUT_TO_END_TRIAL = new AccountStatus('ABOUT_TO_END_TRIAL', true, true);
	public static TRIAL_ENDED = new AccountStatus('TRIAL_ENDED', true, true);
	public static PAID = new AccountStatus('PAID', false, false);
	public static EXPIRED = new AccountStatus('EXPIRED', false, false);
	public static CANCELLED = new AccountStatus('CANCELLED', false, false);
	public static PAST_DUE = new AccountStatus('PAST_DUE', false, false);

	private readonly name: string;
	private readonly trialing: boolean;
	private readonly paid: boolean;

	constructor(name: string, trialing: boolean, paid: boolean) {
		this.name = name;
		this.trialing = trialing;
		this.paid = paid;
	}

	get getName(): string {
		return this.name;
	}

	get isTrialing(): boolean {
		return this.trialing;
	}

	get isPaid(): boolean {
		return this.paid;
	}

}
