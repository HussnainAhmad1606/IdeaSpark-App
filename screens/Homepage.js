import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Homepage() {
  return (
    <View style={styles.container}>
      <Text style={styles.subHeading}>Al - FURQAN</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  },

  box: {
    backgroundColor: "#EEEFFF",
    width: 150,
    height: 100,
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 10,
  },

  heading: {
    color: "#162447",
    fontWeight: 900,
    fontSize: 20
  },

  subHeading: {
    color: "#162447",
    fontWeight: 900,
    fontSize: 18
  },

  description: {
    fontSize: 12
  },

  summaryHeading: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 20
   }

});
