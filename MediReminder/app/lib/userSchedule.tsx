import MedicationEntry from "./medicationEntry";

export default class UserSchedule {
    /* This class should be implemented using the Singleton Design Pattern as there should only be 1 instance
    of the UserSchedule object maintained by the app. This can be achieved by making the constructor private,
    maintaining a private variable to store the single instance, and having a public static method that returns
    the single instance */

    // Instance variables
    private static schedule: UserSchedule;
    private _entryList: MedicationEntry[];

    // Constructor
    private constructor(entryList: MedicationEntry[]) {
        this._entryList = entryList;
    }

    // Class methods
    public static getUserSchedule(): UserSchedule {
        if (UserSchedule.schedule === undefined) {
            let initialEntryList: MedicationEntry[] = new Array();
            UserSchedule.schedule = new UserSchedule(initialEntryList); 
        }
        return UserSchedule.schedule;
    }

    public addEntryToSchedule(entry: MedicationEntry) {
        this._entryList.push(entry);
    }

    public removeEntryFromSchedule(entry: MedicationEntry) {
        let editedEntryList = this._entryList.filter(currEntry => currEntry != entry);
        this._entryList = editedEntryList;
    }

    public get entryList(): MedicationEntry[] {
        return this._entryList;
    }
}