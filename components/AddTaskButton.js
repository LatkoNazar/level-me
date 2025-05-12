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
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={StyleSheet.button}
            >
                <Text>Add new task</Text>
            </TouchableOpacity>

            <Modal transparent={true} visible={modalVisible}>
                <View>
                    <Text>Enter your task:</Text>
                    <TextInput
                        placeholder="Your new task..."
                        value={taskText}
                        onChangeText={setTaskText}
                    />
                    <View>
                        <Button title="Add" onPress={handleAdd} />
                        <Button
                            title="Cancel"
                            color="gray"
                            onPress={() => setModalVisible(false)}
                        />
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
    button: {
        padding: "10%",
    },
});
