import Time from "./time";
import UserSchedule from "./userSchedule";

export default class MedicationEntry {
    // Instance variables
    private _id: number;
    private _name: string;
    private _frequency: number;
    private _amount: number;
    private _days: boolean[];
    private _times: Time[];

    // Constructor
    constructor(name: string, frequency: number, amount: number, days: boolean[], times: Time[]) {
        this._id = UserSchedule.getUserSchedule().nextId;
        UserSchedule.getUserSchedule().nextId++;
        
        this._name = name;
        this._frequency = frequency;
        this._amount = amount;
        this._days = days;
        this._times = times;
    }

    // Class methods
    public get id() {
        return this._id;
    }

    public set id(id: number) {
        // Validate the id
        /* id should be an integer, TypeScript doesn't have a distinct integer type
        and only has the number type so id needs to validated as an integer here */
        if (!Number.isInteger(id)) {
            throw new Error("Invalid id, id must be an integer");
        }
        this._id = id;
    }

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

    public get days() {
        return this._days;
    }

    public set days(days: boolean[]) {
        this._days = days;
    }

    public getDaysAsStringArray() {
        let daysBool: boolean[] = this._days;
        let daysString: String[] = [];
        let stringsList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        for (let i = 0; i < daysBool.length; i++) {
            if (daysBool[i]) {
                daysString.push(stringsList[i]);
            }
        }
        return daysString;
    }

    public get times() {
        return this._times;
    }

    public set times(times: Time[]) {
        this._times = times;
    }

    public getTimesAsStringArray() {
        let timesString: String[] = [];
        for (const time of this._times) {
            let PMStr = time.PM ? "PM" : "AM";
            let timeStr = `${time.hour}:${String(time.minute).padStart(2, '0')} ${PMStr}`;
            timesString.push(timeStr);
        }
        return timesString;
    }
}