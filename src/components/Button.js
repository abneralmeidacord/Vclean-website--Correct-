import React from "react";
import { View, Text } from "react-native";
import "./Button.css";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Button = ({ label, icon, link, bg, color }) => {
  return (
    <a href={link} className="button" style={{ backgroundColor: bg }}>
      {icon && (
        <Ionicons
          style={{ marginRight: "8px" }}
          name={icon}
          size={18}
          color={color}
        />
      )}
      <Text style={{ color: color, fontWeight: "bold" }}>{label}</Text>
    </a>
  );
};

export default Button;
