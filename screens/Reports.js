import { StyleSheet, Text, View, Image } from 'react-native';

export default function Reports() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>TheOutfitMate</Text>

      {/* Profile Showing */}
      <View style={styles.profile}>
        <Image style={styles.avatar} source={require('../assets/avatar.jpg')}>
        </Image>

        <View>
          <Text style={styles.profileName}>Hussnain Ahmad</Text>
          <Text style={styles.profileBio}>Psycho Here ;-)</Text>
        </View>
      </View>


      {/* Wardrobe Items */}
      <View>
        <Text style={styles.section}>Wardrobe Items</Text>

        <View style={styles.horizontalLine}></View>

        <View style={styles.wardrobeContainer}>

          <View style={styles.wardrobeBox}>
            <Text style={styles.wardrobeQty}>120</Text>
            <Text style={styles.itemName}>Shirts</Text>
          </View>



          <View style={styles.wardrobeBox}>
            <Text style={styles.wardrobeQty}>40</Text>
            <Text style={styles.itemName}>Pants</Text>

          </View>


          <View style={styles.wardrobeBox}>
            <Text style={styles.wardrobeQty}>225</Text>
            <Text style={styles.itemName}>Outfits</Text>
          </View>

        </View>
      </View>


      {/* Measurements Section */}
      <View style={styles.measurementsContainer}>
        <Text style={styles.section}>Measurements</Text>
        <View style={styles.horizontalLine}></View>

        <View style={styles.wardrobeContainer}>

          <View style={styles.wardrobeBox}>
            <Text style={styles.wardrobeQty}>60</Text>
            <Text style={styles.itemName}>Weight</Text>
          </View>



          <View style={styles.wardrobeBox}>
            <Text style={styles.wardrobeQty}>5.9</Text>
            <Text style={styles.itemName}>Height</Text>

          </View>


          <View style={styles.wardrobeBox}>
            <Text style={styles.wardrobeQty}>32</Text>
            <Text style={styles.itemName}>Chest</Text>
          </View>

        </View>
      </View>



      <View style={styles.creditContainer}>
        <Text style={styles.section}>Made with  &lt;3 by Psycho</Text>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'center',
  },

  title: {
    color: "#BC6C25",
    fontWeight: "bold",
    fontSize: 24
  },
  section: {
    fontWeight: "bold",
    fontSize: 24
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 20
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  profileBio: {
    fontSize: 15,
    opacity: 0.5
  },
  profile: {
    marginTop: 30,
    marginBottom: 30,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "90vw"
  },
  wardrobeContainer: {
    display: "flex",
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  wardrobeBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 90,
    backgroundColor: "#D9D9D9",
    marginTop: 20,
    boxShadow: "0px 3px 10px 2px rgba(0,0,0,0.75)",
    borderRadius: 10
  },
  wardrobeQty: {
    fontSize: 30,
    color: "#0D0C1D",
    fontWeight: "bold"
  },
  itemName: {
    fontWeight: "bold",
    opacity: 0.5,
    fontSize: 18
  },
  measurementsContainer: {
    marginTop: 50
  },
  creditContainer: {
    height: "10vh",
    marginTop: 100
  }

});
