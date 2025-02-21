import MedicationEntry from "./medicationEntry";

export default class UserSchedule {
    /* This class should be implemented using the Singleton Design Pattern as there should only be 1 instance
    of the UserSchedule object maintained by the app. This can be achieved by making the constructor private,
    maintaining a private variable to store the single instance, and having a public static method that returns
    the single instance */

    // Instance variables
    /**
     * The single instance of the UserSchedule class, a static variable to follow the Singleton Design Pattern
     */
    private static schedule: UserSchedule;
    /**
     * An Array containing instances of the MedicationEntry class, this design implements composition
     */
    private _entryList: MedicationEntry[];
    /**
     * An integer representing the id that the next entry added to the entry list should have
     */
    private _nextId: number;

    // Constructor
    private constructor(entryList: MedicationEntry[]) {
        this._entryList = entryList;
        this._nextId = 0;
    }

    // Class methods
    public get nextId() {
        return this._nextId;
    }

    public set nextId(nextId: number) {
        this._nextId = nextId;
    }

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
        this._nextId--;
    }

    public get entryList(): MedicationEntry[] {
        return this._entryList;
    }
}