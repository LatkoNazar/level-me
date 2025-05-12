import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TaskToDo(props) {
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setChecked(!checked)}
                style={styles.check}
            >
                {checked && <Text style={{ fontSize: 25 }}>✔</Text>}
            </TouchableOpacity>
            <View style={styles.separator}></View>
            <View style={styles.taskDesc}>
                <Text style={styles.taskText}>{props.task.title}</Text>
            </View>
        </View>
    );
}

TaskToDo.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
};

const styles = StyleSheet.create({
    container: {
        width: "95%",
        alignSelf: "center",
        backgroundColor: "darkgrey",
        padding: 10,
        borderRadius: 5,
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
});
