import { SubscriptionType } from './subscription-type';

export class DKSubscription {

	public static MONTHLY_PREMIUM_HITTER = new DKSubscription('MONTHLY_PREMIUM_HITTER', SubscriptionType.HITTING, 1);
	public static ANNUAL_PREMIUM_HITTER = new DKSubscription('ANNUAL_PREMIUM_HITTER', SubscriptionType.HITTING, 12);
	public static MONTHLY_PREMIUM_PITCHER = new DKSubscription('MONTHLY_PREMIUM_PITCHER', SubscriptionType.PITCHING, 1);
	public static ANNUAL_PREMIUM_PITCHER = new DKSubscription('ANNUAL_PREMIUM_PITCHER', SubscriptionType.PITCHING, 12);
	public static LICENSE_MONTHLY_PREMIUM_HITTER = new DKSubscription(
		'LICENSE_MONTHLY_PREMIUM_HITTER',
		SubscriptionType.HITTING,
		1);

	private readonly name: string;
	private readonly type: SubscriptionType;
	private readonly durationInMonths: number;

	constructor(name: string, type: SubscriptionType, durationInMonths: number) {
		this.name = name;
		this.type = type;
		this.durationInMonths = durationInMonths;
	}

	get getName(): string {
		return this.name
	}

	get getType(): SubscriptionType {
		return this.type;
	}

	get getDurationInMonths(): number {
		return this.durationInMonths;
	}

}
