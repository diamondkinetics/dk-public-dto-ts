export class SubscriptionType {

	public static HITTING = new SubscriptionType('HITTING');
	public static PITCHING = new SubscriptionType('PITCHING');
	public static DK_PLUS = new SubscriptionType('DK_PLUS');

	constructor(private readonly name: string) {}

	public getName(): string {
		return this.name;
	}

	public static asArray(): SubscriptionType[] {
		return [
			SubscriptionType.HITTING,
			SubscriptionType.PITCHING,
			SubscriptionType.DK_PLUS
		];
	}
}
