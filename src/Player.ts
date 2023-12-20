export class Player {
    private _id: number;
    private _name: string;
    private _letter: string;
    private _score: number = 0;

    constructor(id: number, name: string, letter: string, score: number) {
        this._id = id;
        this._name = name;
        this._letter = letter;
        this._score = score;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get letter(): string {
        return this._letter;
    }

    set letter(value: string) {
        this._letter = value;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }
}