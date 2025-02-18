import { MedicationEntry } from "./medicationEntry";

export class UserSchedule {
    /* This class should be implemented using the Singleton Design Pattern as there should only be 1 instance
    of the UserSchedule object maintained by the app. This can be achieved by making the constructor private,
    maintaining a private variable to store the single instance, and having a public static method that returns
    the single instance */

    // Instance variables
    private static schedule: UserSchedule;
    private entryList: MedicationEntry[];

    // Constructor
    private constructor(schedule: UserSchedule, entryList: MedicationEntry[]) {
        UserSchedule.schedule = schedule;
        this.entryList = entryList;
    }

    // Class methods
    public static getUserSchedule(): UserSchedule {
        return this.schedule;
    }

    public addEntryToSchedule(entry: MedicationEntry) {
        this.entryList.push(entry);
    }
}