import { Button, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';


const showInfo = () => {
  Alert.alert("Developed by: Psycho Coder");
}


export default function Settings() {

  
  return (
    <View>
        <Text>Settings Screen</Text>
        <TouchableOpacity style={styles.button} onPress={showInfo}>
        <Text style={styles.text}>Press Here</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: "white",
      fontWeight: "bold"
    },
    button: {
      width: 100,
      height: 40,
      backgroundColor: "#162447",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  
  });
