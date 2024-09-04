import { View, Text } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const TabIcon: React.FC<{
  icon?: string;
  name: string;
  focused?: boolean;
}> = ({ icon, name, focused }) => {
  return (
    <View>
      <MaterialCommunityIcons
        color="#000"
        name={icon}
        size={22}
        style={{ marginRight: 12 }}
      />

      <Text
      // className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
      // style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};
