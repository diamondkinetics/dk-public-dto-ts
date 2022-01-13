export class ExtensionType {

    public static FITTER_WARMUP = new ExtensionType('FITTER_WARMUP');
    public static FITTER_SESSION = new ExtensionType('FITTER_SESSION');
    public static STANDARD = new ExtensionType('STANDARD');
    public static HAND_CAST = new ExtensionType('HAND_CAST');
    public static SWING_PLANE = new ExtensionType('SWING_PLANE');
    public static EVALUATION = new ExtensionType('EVALUATION');
    public static SHOWCASE = new ExtensionType('SHOWCASE');
    public static SOFTBALL = new ExtensionType('SOFTBALL');
    public static BULLPEN = new ExtensionType('BULLPEN');
    public static GAME_DAY = new ExtensionType('GAME_DAY');

    constructor(private readonly name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

}
