import React, { useState } from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const EditableTimer = ({ id, title, project, elapsed, isRunning ,updateTimer,removeTimer,runTimer,toggleTimer}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <View>
      {open ? (
        <TimerForm id={id} title={title} project={project} onSubmit={updateTimer} onClose={handleClose} />
      ) : (
        <Timer
          id={id}
          title={title}
          project={project}
          elapsed={elapsed}
          isRunning={isRunning}
          handleOpen={handleOpen}
          handleClose={handleClose}
          removeTimer ={removeTimer}
          runTimer = {runTimer}
          toggleTimer = {toggleTimer}
        />
      )}
    </View>
  );
};

export default EditableTimer;
