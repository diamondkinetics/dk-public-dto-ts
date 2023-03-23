import { SubscriptionType } from './subscription-type';

export class DKSubscription {

	public static readonly MONTHLY_PREMIUM_HITTER = new DKSubscription(
		'MONTHLY_PREMIUM_HITTER',
		'Monthly Premium Hitter',
		SubscriptionType.HITTING,
		1);
	public static readonly ANNUAL_PREMIUM_HITTER = new DKSubscription(
		'ANNUAL_PREMIUM_HITTER',
		'Annual Premium Hitter',
		SubscriptionType.HITTING,
		12);
	public static readonly MONTHLY_PREMIUM_PITCHER = new DKSubscription(
		'MONTHLY_PREMIUM_PITCHER',
		'Monthly Premium Pitcher',
		SubscriptionType.PITCHING,
		1);
	public static readonly ANNUAL_PREMIUM_PITCHER = new DKSubscription(
		'ANNUAL_PREMIUM_PITCHER',
		'Annual Premium Pitcher',
		SubscriptionType.PITCHING,
		12);
	public static readonly LICENSE_MONTHLY_PREMIUM_HITTER = new DKSubscription(
		'LICENSE_MONTHLY_PREMIUM_HITTER',
		'Monthly Hitting Seat License',
		SubscriptionType.HITTING,
		1);
	public static readonly DK_PLUS_MONTHLY = new DKSubscription(
		'DK_PLUS_MONTHLY',
		'DK+ Monthly',
		SubscriptionType.DK_PLUS,
		1);
	public static readonly DK_PLUS_YEARLY = new DKSubscription(
		'DK_PLUS_YEARLY',
		'DK+ Yearly',
		SubscriptionType.DK_PLUS,
		12);


	constructor(
		private readonly name: string,
		private readonly description: string,
		private readonly type: SubscriptionType,
		private readonly durationInMonths: number
	) {}

	public getName(): string {
		return this.name
	}

	public getDescription(): string {
		return this.description;
	}

	public getType(): SubscriptionType {
		return this.type;
	}

	public getDurationInMonths(): number {
		return this.durationInMonths;
	}

	public static asArray(): DKSubscription[] {
		return [
			DKSubscription.DK_PLUS_MONTHLY,
			DKSubscription.DK_PLUS_YEARLY,
			DKSubscription.ANNUAL_PREMIUM_HITTER,
			DKSubscription.ANNUAL_PREMIUM_PITCHER,
			DKSubscription.MONTHLY_PREMIUM_HITTER,
			DKSubscription.MONTHLY_PREMIUM_PITCHER,
			DKSubscription.LICENSE_MONTHLY_PREMIUM_HITTER
		];
	}

	public static byName(name: string): DKSubscription | undefined {
		return DKSubscription.asArray().find(sub => sub.getName() === name);
	}
}
