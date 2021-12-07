
export class PaymentSource {

    public static ENTERPRISE = new PaymentSource('ENTERPRISE');
    public static SENSOR_PURCHASE = new PaymentSource('SENSOR_PURCHASE');
    public static APPLE = new PaymentSource('APPLE');
    public static SEAT_LICENSE = new PaymentSource('SEAT_LICENSE');
    public static STRIPE = new PaymentSource('STRIPE');
    public static THIRD_PARTY = new PaymentSource('THIRD_PARTY');
    public static INTERNAL = new PaymentSource('INTERNAL');

    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    get getName(): string {
        return this.name;
    }
}