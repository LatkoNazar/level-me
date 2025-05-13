import { TouchableOpacity, View, StyleSheet, Modal } from "react-native";
import React, { useState } from "react";
import PropTypes from "prop-types";
import AppText from "./AppText";

export default function TaskToDo(props) {
    const [menuVisible, setMenuVisible] = useState(false);
    const [taskInfoVisible, setTaskInfoVisible] = useState(false);

    function handleCompletedTask() {
        props.toggleTaskCompleted(props.task.id);
    }

    function handleLongPress() {
        setMenuVisible(!menuVisible);
    }

    function handleShowInfo() {
        setTaskInfoVisible(!taskInfoVisible);
    }

    function handleDelete() {
        props.deleteTask(props.task.id);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handleCompletedTask}
                style={styles.check}
            >
                {props.task.completed && (
                    <AppText style={{ fontSize: 25 }}>✔</AppText>
                )}
            </TouchableOpacity>
            <View style={styles.separator}></View>
            <TouchableOpacity
                style={styles.taskDesc}
                onLongPress={handleLongPress}
            >
                <AppText style={styles.taskText}>{props.task.title}</AppText>
            </TouchableOpacity>

            <Modal transparent={true} visible={menuVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.menuText}>
                            <AppText>Choose option:</AppText>
                            <TouchableOpacity
                                onPress={() => setMenuVisible(!menuVisible)}
                                style={styles.close}
                            >
                                <AppText style={styles.X}>✖️</AppText>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity
                                style={styles.infoButton}
                                onPress={handleShowInfo}
                            >
                                <AppText style={styles.infoText}>Info</AppText>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={handleDelete}
                            >
                                <AppText style={styles.deleteText}>
                                    Delete
                                </AppText>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

TaskToDo.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTaskCompleted: PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        width: "95%",
        alignSelf: "center",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
    },

    check: {
        width: 35,
        height: 35,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },

    taskDesc: {
        flex: 1,
        padding: 5,
    },

    separator: {
        height: "100%",
        width: 1,
        backgroundColor: "black",
        marginHorizontal: 10,
    },

    overlay: {
        flex: 1,
        justifyContent: "center",
        position: "absolute",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
        elevation: 5,
    },

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

    buttonGroup: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        gap: 10,
    },

    deleteButton: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
    },
    infoButton: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "lightblue",
        padding: 10,
        borderRadius: 5,
    },

    close: {
        position: "absolute",
        right: -15,
        top: -15,
    },

    menuText: {
        width: "100%",
        alignItems: "center",
    },

    X: {
        fontSize: 30,
    },
});
