export class SubscriptionType {

	public static HITTING = new SubscriptionType('HITTING');
	public static PITCHING = new SubscriptionType('PITCHING');

	private readonly name: string;

	constructor(name: string) {
		this.name = name;
	}

	get getName(): string {
		return this.name;
	}

}
