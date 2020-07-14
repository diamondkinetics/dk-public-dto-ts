export class AccountStatus {

	public static PRE_TRIAL = new AccountStatus(true, true);
	public static PRE_TRIAL_WITH_CREDIT_CARD = new AccountStatus(true, true);
	public static TRIALING = new AccountStatus(true, true);
	public static TRIALING_WITH_CREDIT_CARD = new AccountStatus(true, true);
	public static ABOUT_TO_END_TRIAL = new AccountStatus(true, true);
	public static TRIAL_ENDED = new AccountStatus(true, true);
	public static PAID = new AccountStatus(false, false);
	public static EXPIRED = new AccountStatus(false, false);
	public static CANCELLED = new AccountStatus(false, false);
	public static PAST_DUE = new AccountStatus(false, false);

	private readonly trialing: boolean;
	private readonly paid: boolean;

	constructor(trialing: boolean, paid: boolean) {
		this.trialing = trialing;
		this.paid = paid;
	}

	get isTrialing(): boolean {
		return this.trialing;
	}

	get isPaid(): boolean {
		return this.paid;
	}

}
