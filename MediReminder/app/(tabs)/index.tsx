import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import UserSchedule from '../lib/userSchedule';
import MedicationEntry from '../lib/medicationEntry';

function EntryListComponent(entryList: MedicationEntry[]) {
  if (entryList.length == 0) {
    return (
      <View style={styles.container}>
        <Text>Your schedule is currently empty</Text>
      </View>
    )
  }
  else {
    let entryListComponents = entryList.map((entry) => <li key={entry.name}><Text>{entry.name}: {entry.amount}</Text></li>)
    return (
      <View style={styles.container}>
        <ul>
          {entryListComponents}
        </ul>
      </View>
    );
  }
}

export default function HomeScreen() {
  // Use the useState hook from React to handle updating the component when the schedule is changed
  const [refresh, setRefresh] = useState(false);

  // Placeholder variable to keep track of the current entry list length, used to ensure that the refreshing logic is working correctly
  let content: number = UserSchedule.getUserSchedule().entryList.length;

  // Function to toggle the refresh state
  const handleRefresh = () => {
    setRefresh(!refresh);
  }

  return (
    <View style={styles.container}>
      <Text>{content}</Text>
      {/* Button to manually refresh the page, need to figure out how to make this a relatively less tedious process (i.e. scroll up and hold to reload page) instead */}
      <TouchableOpacity onPress={handleRefresh}><Text>Refresh</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
},
});
