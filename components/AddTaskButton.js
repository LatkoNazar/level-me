import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    Modal,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import PropTypes from "prop-types";

export default function AddTaskButton({ onAddTask }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [taskText, setTaskText] = useState("");

    function handleAdd() {
        if (taskText.trim()) {
            onAddTask(taskText);
            setTaskText("");
            setModalVisible(false);
        }
    }

    return (
        <View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text>Add new task</Text>
            </TouchableOpacity>

            <Modal transparent={true} visible={modalVisible}>
                <View style={style.modalContainer}>
                    <View style={style.modalContent}>
                        <Text>Enter your task:</Text>
                        <TextInput
                            placeholder="Your new task..."
                            value={taskText}
                            onChangeText={setTaskText}
                            style={style.input}
                        />
                        <View style={style.buttonGroup}>
                            <Button title="Add" onPress={handleAdd} />
                            <Button
                                title="Cancel"
                                color="gray"
                                onPress={() => setModalVisible(false)}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

AddTaskButton.propTypes = {
    onAddTask: PropTypes.func.isRequired,
};

const style = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgrey",
    },
    modalContent: {
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 20,
        width: "80%",
        alignItems: "center",
    },
    input: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
});
