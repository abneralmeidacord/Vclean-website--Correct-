/*index.tsx*/
import React from "react";
import ContactButton from "@/components/ContactButton";
import InfoBox from "@/components/InfoBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, Image } from "react-native";
import Logo from "@/assets/images/Logo.png";
import "./App.css";

const App = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <div className="App">
        <header>
          <Image source={Logo} style={{ maxWidth: 100, maxHeight: 85 }} />
        </header>

        <section className="hero">
          <h1>VCLEAN HIGIENIZAÇÃO</h1>
          <p className="hero-subtitle">
            A Empresa Nº1 em Higienização e Impermeabilização de Estofados em
            Cláudio
          </p>
          <ContactButton bg="#fff" color="#00a859" />
          <p className="hero-description">
            A VClean Higienização oferece serviços de limpeza de alta qualidade
            a clientes e empresas, utilizando produtos profissionais e somos
            comprometida com a excelência em cada serviço prestado.
          </p>
        </section>

        <section className="info-section">
          <InfoBox
            title="Solicite seu Orçamento"
            content={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginBottom: "-12px",
                  marginTop: "10px",
                }}
              >
                <p>
                  Obtenha um orçamento de maneira rápida e simples, entre em
                  contato conosco pelo WhatsApp e detalhe o serviço necessário.
                </p>
              </div>
            }
            color="#1F3B85"
            icon="wallet-outline"
          />
          <InfoBox
            title="Horário de Atendimentos"
            color="#fff"
            bg="#1F3B85"
            icon="time-outline"
            content={
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginBottom: "-12px",
                    marginTop: "10px",
                  }}
                >
                  <Ionicons
                    style={{ marginRight: "12px" }}
                    name="calendar"
                    size="20px"
                    color="#fff"
                  />
                  <p>Segunda à Sex. 08:00h - 18:00</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginBottom: "-12px",
                  }}
                >
                  <Ionicons
                    style={{ marginRight: "12px" }}
                    name="home"
                    size="20px"
                    color="#fff"
                  />
                  <p>Atendimento no domicílio</p>
                </div>
              </>
            }
          />
          <InfoBox
            title="ENTRE EM CONTATO"
            content={
              <div
                style={{
                  marginTop: "10px",
                }}
              >
                {" "}
                <p>Telefone: (37) 99955-0038</p>
              </div>
            }
            showContactButton={true}
            bg="#00a859"
            color="#fff"
            btbg="#fff"
            btcolor="#00a859"
            icon="logo-whatsapp"
          />
        </section>
      </div>
    </ScrollView>
  );
};

export default App;
