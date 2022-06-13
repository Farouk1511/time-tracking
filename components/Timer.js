import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

import {millisecondsToHuman} from '../utils/TimerUtils'
import TimerButton from './TimerButton'

const Timer = ({id,title,project,elapsed,handleOpen,removeTimer,runTimer,isRunning,toggleTimer}) => {
    const elapsedString = millisecondsToHuman(elapsed)

    const handleStart = () => {
      toggleTimer(id)
      runTimer(id)
    }

    const handleStop = () => {
      toggleTimer(id)
    }
    
    return(
        <View style={styles.timerContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text>{project}</Text>
            <Text style={styles.elapsedTime}>{elapsedString}</Text>
            <View style={styles.buttonGroup}>
                <TimerButton color={"blue"} small title={"Edit"}onPress={handleOpen}/>
                <TimerButton color={"red"} small title={"Remove"} onPress={() => removeTimer(id)}/>
            </View>
            <TimerButton title={isRunning?'Stop':'Start'} color={isRunning?'#DB2828':"#21BA45"} onPress={handleStart}/>
        </View>
    )
}


const styles = StyleSheet.create({
    timerContainer: {
      backgroundColor: 'white',
      borderColor: '#d6d7da',
      borderWidth: 2,
      borderRadius: 10,
      padding: 15,
      margin: 15,
      marginBottom: 0,
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    elapsedTime: {
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 15,
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  

export default Timer