import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
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
            <View style={styles.container}>
                {tasks.map((task) => {
                    return <TaskToDo task={task} key={task.title} />;
                })}
            </View>
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
        justifyContent: "center",
        textAlign: "center",
    },
    button: {
        alignItems: "center",
        borderTopWidth: "1px",
        borderTopColor: "black",
    },
});
