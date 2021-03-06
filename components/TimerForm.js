import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";

import TimerButton from "./TimerButton";

const TimerForm = ({ id, title, project, onClose, onSubmit }) => {
  const submitText = id ? "Update" : "Create";
  const [values, setValues] = useState({
    title: id ? title : "",
    project: id ? project : "",
  });

  const handleChange = (name) => (value) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    if(submitText === 'Create'){
      onSubmit(values);
    }else{
      onSubmit(id,values)
    }
    
    onClose()
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            value={values.title}
            onChangeText={handleChange("title")}
          />
        </View>
      </View>
      <View styles={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Project</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            value={values.project}
            onChangeText={handleChange("project")}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton
          small
          color="#21BA45"
          title={submitText}
          onPress={handleSubmit}
        />
        <TimerButton small color="#DB2828" title={"Cancel"} onPress={onClose} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "white",
    borderColor: "#D6D7DA",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    borderColor: "#D6D7DA",
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TimerForm;
