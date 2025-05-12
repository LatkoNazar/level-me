import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./pages/HomePage";
import DailyRoutine from "./pages/DailyRoutine";
import ComponentsOfSuccess from "./pages/ComponentsOfSuccess";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomePage} />
                <Tab.Screen name="Your Daily Tasks" component={DailyRoutine} />
                <Tab.Screen
                    name="Components of Success"
                    component={ComponentsOfSuccess}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
