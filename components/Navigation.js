import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../pages/HomeScreen";
import DetailsScreen from "../pages/DetailsScreen";
import ProfileScreen from "../pages/ProfileScreen";

const Stack = createStackNavigator();

 export default function Navigation (){
   return (
       <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Details" component={DetailsScreen} />
         <Stack.Screen name="Profile" component={ProfileScreen} />
       </Stack.Navigator>
   );
 }