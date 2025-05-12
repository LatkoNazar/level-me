import { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import TaskToDo from "../components/TaskToDo.js";
import AddTaskButton from "../components/AddTaskButton.js";

export default function DailyRoutine() {
    const [tasks, setTasks] = useState([]);

    function handleAddTask(newTask) {
        setTasks((prev) => [
            ...prev,
            { id: Date.now().toString(), title: newTask, completed: false },
        ]);
    }

    return (
        <View style={styles.main}>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TaskToDo task={item} />}
                contentContainerStyle={{ padding: 10 }}
            />
            <View style={styles.button}>
                <AddTaskButton onAddTask={handleAddTask} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#f2f2f2",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
    },
    button: {
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "black",
        borderWidth: 1,
        backgroundColor: "grey",
        padding: "5%",
    },
});
