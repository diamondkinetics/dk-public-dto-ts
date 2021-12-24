
export class PaymentStatus {

    public static PRE_TRIAL = new PaymentStatus('PRE_TRIAL');
    public static PAID = new PaymentStatus('PAID');
    public static TRIALING = new PaymentStatus('TRIALING');
    public static PRE_TRIAL_WITH_CREDIT_CARD = new PaymentStatus('PRE_TRIAL_WITH_CREDIT_CARD');
    public static EXPIRED = new PaymentStatus('EXPIRED');
    public static TRIALING_WITH_CREDIT_CARD = new PaymentStatus('TRIALING_WITH_CREDIT_CARD');
    public static CANCELLED = new PaymentStatus('CANCELLED');
    public static TRIAL_ENDED = new PaymentStatus('TRIAL_ENDED');

    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    get getName(): string {
        return this.name;
    }
}