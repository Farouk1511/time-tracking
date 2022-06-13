import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TimerButton from "./TimerButton";
import TimerForm from "./TimerForm";

const ToggleableTimerForm = ({addNewTimer}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
      setIsOpen(true)
  }
  const handleClose = () => {
      setIsOpen(false)
  }



  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? <TimerForm onClose={handleClose} onSubmit={addNewTimer}/> : <TimerButton title={"+"} color="black" onPress={handleOpen} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});

export default ToggleableTimerForm;
