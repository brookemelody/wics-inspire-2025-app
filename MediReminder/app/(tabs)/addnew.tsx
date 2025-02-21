import { useState } from "react";
import { Alert, TextInput, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import MedicationEntry from "../lib/medicationEntry";
import UserSchedule from "../lib/userSchedule";

function addMedicationEntry(medicationName: string, amount: number,) {
    try {
        // Create a new instance of the MedicationEntry Object and pass the parameters entered by the user
        // TODO: Add form to get frequency + other parameters, current placeholder for frequency is 0
        const entry = new MedicationEntry(medicationName, 0, amount);

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
            <TouchableOpacity style={styles.addButton} onPress={() => {
                addMedicationEntry(medicationName, numberPills);
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
    }
});