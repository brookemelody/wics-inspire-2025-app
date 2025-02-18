import { useState } from "react";
import { Button } from "react-native";
import { View, Text, StyleSheet } from "react-native";

// See official documentation for how to use Expo tab router here: https://docs.expo.dev/router/advanced/tabs/
export default function Tab() {
    const [numberPills, setNumberPills] = useState(0);

    return (
        <View style={styles.container}>
            <Text>{numberPills}</Text>
            <View style={styles.btnContainer}>
                <Button title="+" onPress={() => setNumberPills(numberPills + 1)} />
                <Button title="-" onPress={() => setNumberPills(numberPills - 1)}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
    }
});