import React from "react";
import Button from "./Button";

export const ContactButton = ({ bg, color }) => {
  return (
    <Button
      label="Fale conosco"
      link="https://api.whatsapp.com/send?phone=5537999550038"
      icon="logo-whatsapp"
      bg={bg}
      color={color ? color : "#fff"}
    />
  );
};
export default ContactButton;
