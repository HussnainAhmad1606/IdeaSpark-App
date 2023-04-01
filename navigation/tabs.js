import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import HomeIcon from "../assets/icons/home.png";
import TabBarIcon from "../components/TabBarIcon";
import Homepage from "../screens/Homepage";
import Reading from "../screens/Reading";
import Reports from "../screens/Reports";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

export default function Tabs(){
return (
    <Tab.Navigator
    screenOptions={
        {
            "tabBarShowLabel": false,
            "showIcon": true,
            "activeTintColor": "#e32f45",
            "inactiveTintColor": "#748c94",
            "tabBarStyle": [
                {
                    position: "absolute",
                    bottom: 15,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    borderRadius: 15,
                    backgroundColor: "#5D69FF",
                    height: 80,
                    ...styles.shadow
                }
            ]
        }
    }
    >
        <Tab.Screen name="Home" component={ Homepage } options={{
        tabBarIcon: ({focused})=> {
           return (
            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require("../assets/icons/home.png")}
                style={{

                    width: 25,
                    height: 25,
                    tintColor: focused ? "white": "#162447"
                }}/>
                <Text style={{
                    color: focused ? "white": "#162447"
                }}>Home</Text>
            </View>
           )
        }
        
        }}/> 




        <Tab.Screen name="Reading" component={ Reading } options={{
        tabBarIcon: ({focused})=> {
           return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require("../assets/icons/book.png")}
                style={{

                    width: 26,
                    height: 26,
                    tintColor: focused ? "white": "#162447"
                }}/>
                <Text style={{
                    color: focused ? "white": "#162447"
                }}>Read</Text>
            </View>
           )
        }
        
        }}/> 



        <Tab.Screen name="Reports" component={ Reports } options={{
        tabBarIcon: ({focused})=> {
           return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require("../assets/icons/reports.png")}
                style={{

                    width: 26,
                    height: 26,
                    tintColor: focused ? "white": "#162447"
                }}/>
                <Text style={{
                    color: focused ? "white": "#162447"
                }}>Reports</Text>
            </View>
           )
        }
        
        }}/> 
        <Tab.Screen name="Settings" component={ Settings } options={{
        tabBarIcon: ({focused})=> {
           return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require("../assets/icons/settings.png")}
                style={{

                    width: 26,
                    height: 26,
                    tintColor: focused ? "white": "#162447"
                }}/>
                <Text style={{
                    color: focused ? "white": "#162447"
                }}>Settings</Text>
            </View>
           )
        }
        
        }}/> 
    </Tab.Navigator>
)
}



const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})