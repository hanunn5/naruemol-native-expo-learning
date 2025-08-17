import {View, Text, Button} from "react-native";

export default function DetailsScreen ({navigation}){
  return (
    <View style={{flex: 1, alignItems: "center" , justifyContent: "center" }}>
      <Text>DetailsScreen</Text>
    <Button 
      title="Go to Profile" 
      onPress={() => navigation.navigate("Profile")} 
      />
    <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
    />
        <Button
        title="Go to StyleSheet"
        onPress={() => navigation.navigate("StyleSheet")}
    />
    </View>
  );
}