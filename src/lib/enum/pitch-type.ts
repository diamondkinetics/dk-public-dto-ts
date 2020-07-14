import { PlayType } from "./play-type";

export class PitchType {

	public static FASTBALL = new PitchType('Fastball', 'FA', 0, [PlayType.BASEBALL, PlayType.FAST_PITCH_SOFTBALL]);
	public static CURVEBALL = new PitchType(
		'Curveball',
		'CU',
		1,
		[PlayType.BASEBALL, PlayType.FAST_PITCH_SOFTBALL, PlayType.SLOW_PITCH_SOFTBALL]);
	public static CHANGEUP = new PitchType(
		'Changeup',
		'CH',
		2,
		[PlayType.BASEBALL, PlayType.FAST_PITCH_SOFTBALL, PlayType.SLOW_PITCH_SOFTBALL]);
	public static SLIDER = new PitchType('Slider', 'SL', 3, [PlayType.BASEBALL]);
	public static SPLITTER = new PitchType('Splitter', 'FS', 4, [PlayType.BASEBALL]);
	public static RISE_BALL = new PitchType('Rise Ball', 'RB', 5, [PlayType.FAST_PITCH_SOFTBALL]);
	public static DROP_BALL = new PitchType(
		'Drop Ball',
		'DB',
		6,
		[PlayType.FAST_PITCH_SOFTBALL, PlayType.SLOW_PITCH_SOFTBALL]);
	public static SCREWBALL = new PitchType(
		'Screwball',
		'SC',
		7,
		[PlayType.FAST_PITCH_SOFTBALL, PlayType.SLOW_PITCH_SOFTBALL]);
	public static KNUCKLEBALL = new PitchType('Knuckleball', 'KN', 8, [PlayType.BASEBALL]);
	public static OTHER = new PitchType('Other', 'OT', 9, []);
	public static OTHER_BREAKING = new PitchType('Other Breaking', 'OB', 10, [PlayType.BASEBALL]);
	public static OTHER_OFF_SPEED = new PitchType('Other Off Speed', 'OS', 11, [PlayType.BASEBALL]);
	public static FASTBALL_TWO_SEAM = new PitchType('Two Seam Fastball', 'FT', 12, [PlayType.BASEBALL]);
	public static SINKER = new PitchType('Sinker', 'SI', 13, [PlayType.BASEBALL]);
	public static CUTTER = new PitchType('Cutter', 'FC', 14, [PlayType.BASEBALL]);
	public static KNUCKLECURVE = new PitchType('Knuckle Curve', 'KC', 15, [PlayType.BASEBALL]);
	public static FORKBALL = new PitchType('Forkball', 'FO', 16, [PlayType.BASEBALL]);
	public static EEPHUS = new PitchType('Eephus', 'EP', 17, [PlayType.BASEBALL]);
	public static THROW = new PitchType('Throw', 'JT', 18, [PlayType.BASEBALL]);
	public static RETURN_THROW = new PitchType('Return Throw', 'RT', 19, [PlayType.BASEBALL]);
	public static LONG_TOSS = new PitchType('Long Toss', 'LT', 20, [PlayType.BASEBALL]);

	private readonly name: string;
	private readonly abbreviation: string;
	private readonly sortOrder: number;
	private readonly playTypes: PlayType[];

	constructor(name: string, abbreviation: string, sortOrder: number, playTypes: PlayType[]) {
		this.name = name;
		this.abbreviation = abbreviation;
		this.sortOrder = sortOrder;
		this.playTypes = playTypes;
	}

	get getName(): string {
		return this.name;
	}

	get getAbbreviation(): string {
		return this.abbreviation;
	}

	get getSortOrder(): number {
		return this.sortOrder;
	}

	get getPlayTypes(): PlayType[] {
		return this.playTypes;
	}

}
