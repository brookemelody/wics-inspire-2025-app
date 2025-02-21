import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import UserSchedule from '../lib/userSchedule';

export default function HomeScreen() {
  // Use the useState hook from React to handle updating the component when the schedule is changed
  // React will re-render a component whenever its state changes
  const [refresh, setRefresh] = useState(false);

  // Get the entry list from the singular UserSchedule instance
  let entryList = UserSchedule.getUserSchedule().entryList;
  // If the schedule contains 0 entries, the home screen should display a special message indicating that the schedule is empty
  let entryListComponents;
  if (entryList.length == 0) {
    entryListComponents = "Your schedule is currently empty"
  }
  // Otherwise, list all of the entries in the schedule's entry list
  else {
    entryListComponents = entryList.map((entry) => `${entry.name}: ${entry.amount}\n`)
  }

  // Function to toggle the refresh state
  const handleRefresh = () => {
    setRefresh(!refresh);
  }

  return (
    <View style={styles.container}>
      {entryList.length == 0 ? "" : <Text>Current Schedule contains {entryList.length} entries</Text>}
      <Text>{entryListComponents}</Text>
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
