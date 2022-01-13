export class SubscriptionType {

	public static HITTING = new SubscriptionType('HITTING');
	public static PITCHING = new SubscriptionType('PITCHING');

	constructor(private readonly name: string) {}

	public getName(): string {
		return this.name;
	}

	public static asArray(): SubscriptionType[] {
		return [
			SubscriptionType.HITTING,
			SubscriptionType.PITCHING
		];
	}

}
