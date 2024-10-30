import React from "react";

<div className="info-box">
  <h3>Solicite seu Orçamento</h3>
  <p>
    Obtenha um orçamento de maneira rápida e simples, entre em contato conosco
    pelo WhatsApp e detalhe o serviço necessário.
  </p>
  <ContactButton bg="#00a859" color="#fff" />
</div>;

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
