import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import ContactButton from "@/components/ContactButton";
import "./InfoBox.css";

const InfoBox = ({
  title,
  content,
  showContactButton = false,
  bg,
  icon,
  color,
  btcolor,
  btbg,
}) => {
  return (
    <div className="info-box" style={{ backgroundColor: bg, color: color }}>
      {icon && (
        <Ionicons
          style={{
            marginRight: "8px",
            display: "flex",
            justifySelf: "flex-start",
            marginBottom: "12px",
          }}
          name={icon}
          size={48}
          color={color}
        />
      )}
      <h3
        style={{
          display: "flex",
          justifySelf: "flex-start",
          marginBottom: "-8px",
        }}
      >
        {title}
      </h3>
      <div>{content}</div>
      {showContactButton && <ContactButton color={btcolor} bg={btbg} />}
    </div>
  );
};

export default InfoBox;
