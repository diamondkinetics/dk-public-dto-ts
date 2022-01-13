export class PaymentSource {

    public static ENTERPRISE = new PaymentSource('ENTERPRISE');
    public static SENSOR_PURCHASE = new PaymentSource('SENSOR_PURCHASE');
    public static APPLE = new PaymentSource('APPLE');
    public static SEAT_LICENSE = new PaymentSource('SEAT_LICENSE');
    public static STRIPE = new PaymentSource('STRIPE');
    public static THIRD_PARTY = new PaymentSource('THIRD_PARTY');
    public static INTERNAL = new PaymentSource('INTERNAL');

    constructor(private readonly name: string) {}

    public getName(): string {
        return this.name;
    }

    public static asArray(): PaymentSource[] {
        return [
            PaymentSource.ENTERPRISE,
            PaymentSource.SENSOR_PURCHASE,
            PaymentSource.APPLE,
            PaymentSource.SEAT_LICENSE,
            PaymentSource.STRIPE,
            PaymentSource.THIRD_PARTY,
            PaymentSource.INTERNAL
        ];
    }

}
