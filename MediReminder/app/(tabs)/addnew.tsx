import { useState } from "react";
import { Alert, TextInput, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import MedicationEntry from "../lib/medicationEntry";
import UserSchedule from "../lib/userSchedule";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TimePickerModal } from "react-native-paper-dates";
import React from "react";
import { getHours, getMinutes } from "react-native-paper-dates/lib/typescript/Time/timeUtils";

function addMedicationEntry(medicationName: string, amount: number, daysToTake: boolean[]) {
    try {
        // Create a new instance of the MedicationEntry Object and pass the parameters entered by the user
        // TODO: Add form to get frequency + other parameters, current placeholder for frequency is 0
        const entry = new MedicationEntry(medicationName, 0, amount, daysToTake);

        // Add the medication entry to the user's medication schedule
        let schedule = UserSchedule.getUserSchedule();
        schedule.addEntryToSchedule(entry);

        // Alert the user that the medication entry was successfully added to their schedule
        Alert.alert('Success', `Added medication entry ${medicationName} to your schedule!`);
    } catch (error) {
        // Alert the user that the values that they entered into the form are invalid, so this medication entry could not be added to their schedule
        Alert.alert('Failure', 'Could not add this medication entry to your schedule. Please check that you entered all of the information correctly')
    }
}

// See official documentation for how to use Expo tab router here: https://docs.expo.dev/router/advanced/tabs/
export default function Tab() {
    const [numberPills, setNumberPills] = useState(0);
    const [medicationName, onChangeMedicationName] = useState('Name of medication');
    // Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
    const [daysToTake, setDaysToTake] = useState([false, false, false, false, false, false, false])
    const [timePickerVisible, setTimePickerVisible] = useState(false);
    let dateList : Date[] = new Array();
    const [timesToTake, setTimesToTake] = useState(dateList);

    const onDismiss = () => {
        setTimePickerVisible(false);
    }

    const onConfirm = React.useCallback(({hours, minutes}) => {
        setTimePickerVisible(false);

        let time = new Date();
        time.setHours(hours);
        time.setMinutes(minutes);
        dateList.push(time);

        setTimesToTake(dateList);
        console.log(dateList);
    }, [setTimePickerVisible]);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Medication Entry Information:</Text>
            <Text style={styles.numText}>{numberPills}</Text>
            <View style={styles.btnContainer}>
                {/* React Native Button components don't have the styles prop and thus cannot be styled, so TouchableOpacity component is used instead */}
                <TouchableOpacity style={styles.counterButton} onPress={() => setNumberPills(numberPills + 1)}>
                    <Text style={styles.counterButtonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.counterButton} onPress={() => {
                    // User should only be able to add a positive, nonzero number for a valid quantity of medication
                    if (numberPills > 0) {
                        setNumberPills(numberPills - 1)
                    }
                }}>
                    <Text style={styles.counterButtonText}>-</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TextInput onChangeText={onChangeMedicationName} value={medicationName} placeholder="Name of medication"/>
            </View>
            <View>
                {/* Selection for which day(s) of the week that the medication needs to be taken,
                    this is a checkbox as opposed to a dropdown value since there needs to be
                    the ability to select multiple values if necessary 
                */}
                <BouncyCheckbox text="Monday" style={styles.checkbox}  isChecked={daysToTake[0]} onPress={(isChecked: boolean) => {
                    setDaysToTake(oldDaysToTake => {
                        const newDaysToTake = [...oldDaysToTake];
                        if (isChecked) {
                            newDaysToTake[0] = true;
                        }
                        else {
                            newDaysToTake[0] = false;
                        }
                        return newDaysToTake;
                    });
                }}/>
                <BouncyCheckbox text="Tuesday" style={styles.checkbox} isChecked={daysToTake[1]} onPress={(isChecked: boolean) => {
                    setDaysToTake(oldDaysToTake => {
                        const newDaysToTake = [...oldDaysToTake];
                        if (isChecked) {
                            newDaysToTake[1] = true;
                        }
                        else {
                            newDaysToTake[1] = false;
                        }
                        return newDaysToTake;
                    });
                }}/>
                <BouncyCheckbox text="Wednesday" style={styles.checkbox} isChecked={daysToTake[2]} onPress={(isChecked: boolean) => {
                    setDaysToTake(oldDaysToTake => {
                        const newDaysToTake = [...oldDaysToTake];
                        if (isChecked) {
                            newDaysToTake[2] = true;
                        }
                        else {
                            newDaysToTake[2] = false;
                        }
                        return newDaysToTake;
                    });
                }}/>
                <BouncyCheckbox text="Thursday" style={styles.checkbox} isChecked={daysToTake[3]} onPress={(isChecked: boolean) => {
                    setDaysToTake(oldDaysToTake => {
                        const newDaysToTake = [...oldDaysToTake];
                        if (isChecked) {
                            newDaysToTake[3] = true;
                        }
                        else {
                            newDaysToTake[3] = false;
                        }
                        return newDaysToTake;
                    });
                }}/>
                <BouncyCheckbox text="Friday" style={styles.checkbox} isChecked={daysToTake[4]} onPress={(isChecked: boolean) => {
                    setDaysToTake(oldDaysToTake => {
                        const newDaysToTake = [...oldDaysToTake];
                        if (isChecked) {
                            newDaysToTake[4] = true;
                        }
                        else {
                            newDaysToTake[4] = false;
                        }
                        return newDaysToTake;
                    });
                }}/>
                <BouncyCheckbox text="Saturday" style={styles.checkbox} isChecked={daysToTake[5]} onPress={(isChecked: boolean) => {
                    setDaysToTake(oldDaysToTake => {
                        const newDaysToTake = [...oldDaysToTake];
                        if (isChecked) {
                            newDaysToTake[5] = true;
                        }
                        else {
                            newDaysToTake[5] = false;
                        }
                        return newDaysToTake;
                    });
                }}/>
                <BouncyCheckbox text="Sunday" style={styles.checkbox} isChecked={daysToTake[6]} onPress={(isChecked: boolean) => {
                    setDaysToTake(oldDaysToTake => {
                        const newDaysToTake = [...oldDaysToTake];
                        if (isChecked) {
                            newDaysToTake[6] = true;
                        }
                        else {
                            newDaysToTake[6] = false;
                        }
                        return newDaysToTake;
                    });
                }}/>
            </View>
            <View>
                <TouchableOpacity onPress={() => setTimePickerVisible(true)}><Text>Add Time</Text></TouchableOpacity>
                <TimePickerModal
                    visible={timePickerVisible}
                    onDismiss={onDismiss}
                    onConfirm={onConfirm}
                    hours={12}
                    minutes={0}
                />
            </View>
            <TouchableOpacity style={styles.addButton} onPress={() => {
                // Call the respective function to add the entry to the schedule
                addMedicationEntry(medicationName, numberPills, daysToTake);

                // Reset the form fields
                setNumberPills(0);
                onChangeMedicationName("Name of medication");
                setDaysToTake([false, false, false, false, false, false, false]);
            }}>
                <Text style={styles.addButtonText}>Add Medication Entry</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    label: {
        color: '#8f8f8f',
        fontSize: 25,
    },
    numText: {
        color: '#8f8f8f',
        fontSize: 70,
    },
    btnContainer: {
        flexDirection: 'row',
        gap: 25,
    },
    counterButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        borderRadius: 50,
        height: 100,
        width: 100,
    },
    counterButtonText: {
        color: '#8f8f8f',
        fontSize: 70,
    },
    addButton: {
        backgroundColor: 'gray',
        padding: 20,
        borderRadius: 20,
    },
    addButtonText: {
        color: '#f0f0f0',
        fontWeight: 'bold',
        fontSize: 20,
    },
    checkbox: {
        width: 150,
    }
});