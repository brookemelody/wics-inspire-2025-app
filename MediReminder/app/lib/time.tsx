/**
 * JavaScript only has a built-in Date class which unfortunately does not fit the needs of this project,
 * so a custom-built Time class to store only hour, minute, and AM/PM is needed.
 */
export default class Time {
    // Instance variables
    private _hour: number;
    private _minute: number;
    private _PM: boolean;

    // Constructor
    constructor(hour: number, minute: number, PM: boolean) {
        this._hour = hour;
        this._minute = minute;
        this._PM = PM;
    }

    // Class methods
    public get hour() {
        return this._hour;
    }

    public set hour(hour: number) {
        // Validate the hour
        /* hour should be an integer, TypeScript doesn't have a distinct integer type
        and only has the number type so hour needs to validated as an integer here */
        if (!Number.isInteger(hour)) {
            throw new Error("Invalid hour, hour must be an integer");
        }
        this._hour = hour;
    }

    public get minute() {
        return this._minute;
    }

    public set minute(minute: number) {
        // Validate the minute
        /* minute should be an integer, TypeScript doesn't have a distinct integer type
        and only has the number type so minute needs to validated as an integer here */
        if (!Number.isInteger(minute)) {
            throw new Error("Invalid minute, minute must be an integer");
        }
        this._minute = minute;
    }

    public get PM() {
        return this._PM;
    }

    public set PM(PM: boolean) {
        this._PM = PM;
    }
}