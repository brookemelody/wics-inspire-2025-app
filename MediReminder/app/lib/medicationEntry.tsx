export default class MedicationEntry {
    // Instance variables
    private _name: string;
    private _frequency: number;
    // private _days: string[];
    private _amount: number;

    // Constructor
    constructor(name: string, frequency: number, amount: number) {
        this._name = name;
        this._frequency = frequency;
        this._amount = amount;
    }

    // Class methods
    public get name() {
        return this._name;
    }

    public set name(name: string) {
        // Validate the name
        if (name.length <= 0) {
            throw new Error("Invalid name, name cannot be an empty String");
        }
        this._name = name;
    }

    public get frequency() {
        return this._frequency;
    }

    public set frequency(frequency: number) {
        // Validate the frequency
        /* frequency should be an integer, TypeScript doesn't have a distinct integer type
        and only has the number type so frequency needs to validated as an integer here */
        if (!Number.isInteger(frequency)) {
            throw new Error("Invalid frequency, frequency must be an integer");
        }
        this._frequency = frequency;
    }

    public get amount() {
        return this._amount;
    }

    public set amount(amount: number) {
        // Validate the amount
        /* amount should be an integer, TypeScript doesn't have a distinct integer type
        and only has the number type so amount needs to validated as an integer here */
        if (!Number.isInteger(amount)) {
            throw new Error("Invalid amount, amount must be an integer");
        }
        this._amount = amount;
    }
}