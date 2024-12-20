import React from "react";
import { ScrollView, Image, ImageBackground } from "react-native";
import { ContactButton, InfoBox, FAQDrawer } from "./components/index";
import Ionicons from "@expo/vector-icons/Ionicons";
import Logo from "./assets/images/Logo.png";
import "./App.css";

const App = () => {
  const bannerImage = require("./assets/images/BANNER.png");

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <div className="App">
        <header>
          <Image source={Logo} style={{ maxWidth: 100, maxHeight: 85 }} />
        </header>

        <ImageBackground
          source={bannerImage}
          style={{ width: "100%", height: "auto" }}
        >
          <div className="hero">
            <h1>VCLEAN HIGIENIZAÇÃO</h1>
            <p className="hero-subtitle">
              A Empresa Nº1 em Higienização e Impermeabilização de Estofados em
              Cláudio
            </p>
            <ContactButton bg="#fff" color="#00a859" />
            <p className="hero-description">
              A VClean Higienização oferece serviços de limpeza de alta
              qualidade a clientes e empresas, utilizando produtos profissionais
              e somos comprometida com a excelência em cada serviço prestado.
            </p>
          </div>
        </ImageBackground>

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

        <section className="location-section">
          <div className="location">
            <h1>Área de atendimento</h1>
            <p>
              A VCLEAN HIGIENIZAÇÃO realiza seus atendimentos em domicílio.
              <br />
              Atendemos Cláudio e Região
            </p>
          </div>
        </section>

        <section>
          <div className="faq-title">
            <h1>PERGUNTAS FREQUENTES</h1>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginBottom: "25px",
            }}
          >
            <FAQDrawer />

            <Image source={Logo} style={{ maxWidth: 100, maxHeight: 85 }} />
          </div>
        </section>
      </div>
    </ScrollView>
  );
};

export default App;
