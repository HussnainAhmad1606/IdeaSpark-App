import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Homepage() {
  return (
    <View style={styles.container}>
      <Text style={styles.subHeading}>Al - FURQAN</Text>
      <Text style={styles.subHeading}>12 Rajab, 1442</Text>
      <Text style={styles.subHeading}>Saturaday 25, 2023</Text>

      <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Text style={styles.heading}>300 Hours</Text>
            <Text style={styles.description}>Reading Time</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.heading}>20</Text>
            <Text style={styles.description}>Times Quran Read</Text>
          </View>

      </View>


      <Text style={styles.summaryHeading}>Summary</Text>

      <View>
        <Text>Reading Daily</Text>
        <View style={styles.progressBar}></View>
      </View>

      <Text style={styles.summaryHeading}>Today Progress</Text>
      <StatusBar style="auto" />
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
