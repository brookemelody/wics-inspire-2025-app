import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import UserSchedule from '../lib/userSchedule';

export default function HomeScreen() {
  // React Native hook to get the current focus state of the screen,
  // the HomeScreen component needs to be re-rendered whenever it is in focus
  // so that the information displayed on the screen is updated whenever the user switches screens
  // when they added a new entry in the Add New screen
  const isFocused = useIsFocused();

  // Use the useState hook from React to handle updating the component when the schedule is changed
  // React will re-render a component whenever its state changes
  const [refresh, setRefresh] = useState(false);

  // Get the entry list from the singular UserSchedule instance
  let entryList = UserSchedule.getUserSchedule().entryList;
  // If the schedule contains 0 entries, the home screen should display a special message indicating that the schedule is empty
  let entryListComponents;
  if (entryList.length == 0) {
    entryListComponents = <Text>Your schedule is currently empty</Text>
  }
  // Otherwise, list all of the entries in the schedule's entry list
  else {
    entryListComponents = entryList.map((entry) => 
    <View key={entry.id}>
      <Text>{entry.name}: {entry.amount}</Text>
      <TouchableOpacity onPress={() => {
        UserSchedule.getUserSchedule().removeEntryFromSchedule(entry);
        handleRefresh();
      }}><Text>Delete {entry.id}</Text></TouchableOpacity>
  </View>)
  }

  // Function to toggle the refresh state
  const handleRefresh = () => {
    setRefresh(!refresh);
  }

  // Call the handleRefresh function whenever the isFocused variable changes value
  // so that the information displayed on the screen is updated whenever the user
  // switches to the Home screen because the HomeScreen component was re-rendered
  // due to state change
  useEffect(() => {
    handleRefresh();
  }, [isFocused])

  return (
    <View style={styles.container}>
      {entryList.length == 0 ? "" : <Text>Current Schedule contains {entryList.length} entries</Text>}
      {/* Note to self: TouchableOpacity components will not be interactable with if it is made the child element of a React Native Text component*/}
      <View>{entryListComponents}</View>
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
