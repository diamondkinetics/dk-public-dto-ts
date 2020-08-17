import { SubscriptionType } from './subscription-type';

export class DKSubscription {

	public static MONTHLY_PREMIUM_HITTER = new DKSubscription(
		'MONTHLY_PREMIUM_HITTER',
		'Monthly Premium Hitter',
		SubscriptionType.HITTING,
		1);
	public static ANNUAL_PREMIUM_HITTER = new DKSubscription(
		'ANNUAL_PREMIUM_HITTER',
		'Annual Premium Hitter',
		SubscriptionType.HITTING,
		12);
	public static MONTHLY_PREMIUM_PITCHER = new DKSubscription(
		'MONTHLY_PREMIUM_PITCHER',
		'Monthly Premium Pitcher',
		SubscriptionType.PITCHING,
		1);
	public static ANNUAL_PREMIUM_PITCHER = new DKSubscription(
		'ANNUAL_PREMIUM_PITCHER',
		'Annual Premium Pitcher',
		SubscriptionType.PITCHING,
		12);
	public static LICENSE_MONTHLY_PREMIUM_HITTER = new DKSubscription(
		'LICENSE_MONTHLY_PREMIUM_HITTER',
		'Monthly Hitting Seat License',
		SubscriptionType.HITTING,
		1);

	private readonly name: string;
	private readonly description: string;
	private readonly type: SubscriptionType;
	private readonly durationInMonths: number;

	constructor(name: string, description: string, type: SubscriptionType, durationInMonths: number) {
		this.name = name;
		this.description = description;
		this.type = type;
		this.durationInMonths = durationInMonths;
	}

	get getName(): string {
		return this.name
	}

	get getDescription(): string {
		return this.description;
	}

	get getType(): SubscriptionType {
		return this.type;
	}

	get getDurationInMonths(): number {
		return this.durationInMonths;
	}

	public static asArray(): DKSubscription[] {
		return [
			DKSubscription.ANNUAL_PREMIUM_HITTER,
			DKSubscription.ANNUAL_PREMIUM_PITCHER,
			DKSubscription.MONTHLY_PREMIUM_HITTER,
			DKSubscription.MONTHLY_PREMIUM_PITCHER,
			DKSubscription.LICENSE_MONTHLY_PREMIUM_HITTER
		];
	}

	public static byName(name: string): DKSubscription | undefined {
		return DKSubscription.asArray().find(sub => sub.getName === name);
	}

}
