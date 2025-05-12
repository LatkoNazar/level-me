import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import PropTypes from "prop-types";

function TaskToDo(props) {
    const [checked, setChecked] = useState(false);

    return (
        <View>
            <TouchableOpacity onPress={() => setChecked(!checked)}>
                {checked && <Text>✔</Text>}
            </TouchableOpacity>
            <View>
                <Text>{props.task.title}</Text>
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

export default TaskToDo;
