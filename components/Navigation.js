import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../pages/HomeScreen";
import DetailsScreen from "../pages/DetailsScreen";
import ProfileScreen from "../pages/ProfileScreen";
import CountScreen from '../pages/CountScreen';
import StyleSheet from "../pages/StyleSheet" ;
import FlexScreen from "../pages/FlexSceen";
import LayoutScreen from "../pages/LayoutScreen";

const Stack = createStackNavigator();

 export default function Navigation (){
   return (
       <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Details" component={DetailsScreen} />
         <Stack.Screen name="Profile" component={ProfileScreen} />
         <Stack.Screen name="Count" component={CountScreen} />
         <Stack.Screen name="StyleSheet" component={StyleSheet} />
         <Stack.Screen name='Flex-example' component={FlexScreen} />
         <Stack.Screen name="Layout-example" component={LayoutScreen} />
       </Stack.Navigator>
   );
 }