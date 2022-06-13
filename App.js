import React, { useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ToggleableTimerForm from "./components/ToggleableTimerForm";
import EditableTimer from "./components/EditableTimer";

export default function App() {
  const [timers, setTimers] = useState([
    {
      title: "Mow the lawn",
      project: "House Chores",
      id: uuidv4(),
      elapsed: 5456099,
      isRunning: false,
    },
    {
      title: "Make Jollof Rice",
      project: "House Chores",
      id: uuidv4(),
      elapsed: 1273998,
      isRunning: false,
    },
  ]);
  const [intervalId, setIntervalId] = useState(0);

  const addNewTimer = ({ title, project }) => {
    const timer = {
      title,
      project,
      id: uuidv4(),
      elapsed: 0,
      isRunning: false,
    };

    setTimers([...timers, timer]);
  };

  const updateTimer = (id, values) => {
    const updatedTimers = timers.map((timer) => {
      if (timer.id === id) {
        return { ...timer, ...values };
      } else {
        return { ...timer };
      }
    });

    setTimers([...updatedTimers]);
  };
  const removeTimer = (id) => {
    const index = timers.findIndex((timer) => timer.id === id);
    timers.splice(index, 1);

    setTimers([...timers]);
  };

  const runTimer = (id) => {
    const newIntervalId = setInterval(() => {
      setTimers((prev) =>
        prev.map((timer) => {
          if (timer.id === id) {
            return {
              ...timer,
              elapsed: timer.isRunning ? timer.elapsed + 1000 : timer.elapsed,
            };
          } else {
            return { ...timer };
          }
        })
      );
    }, 1000);

    setIntervalId(newIntervalId);
  };

  const toggleTimer = (timerId) => {
    setTimers((prev) =>
    prev.map((timer) => {
      if (timer.id === timerId) {
        return {
          ...timer,
          isRunning:!timer.isRunning
        };
      } else {
        return { ...timer };
      }
    })
  );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm addNewTimer={addNewTimer} />
        
        {timers.map((timer) => (
          <EditableTimer
            key={timer.id}
            id={timer.id}
            title={timer.title}
            project={timer.project}
            elapsed={timer.elapsed}
            isRunning={timer.isRunning}
            updateTimer={updateTimer}
            removeTimer={removeTimer}
            runTimer={runTimer}
            toggleTimer={toggleTimer}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D6D7DA",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  timerList: {
    paddingBottom: 15,
  },
});
