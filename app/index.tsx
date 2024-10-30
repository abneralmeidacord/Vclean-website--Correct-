import React from "react";
import ContactButton from "@/components/ContactButton";
import "./App.css";
import { ScrollView, Image } from "react-native";
import Logo from "@/assets/images/Logo.png";

const App = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <div className="App">
        <header>
          <Image source={Logo} style={{ maxWidth: 100, maxHeight: 85 }} />
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">Sobre Nós</a>
              </li>
              <li>
                <a href="#services">Serviços</a>
              </li>
            </ul>
          </nav>
          <ContactButton bg="#00a859" color="#fff" />
        </header>

        <section className="hero">
          <h1>VCLEAN HIGIENIZAÇÃO</h1>
          <p>
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
          <div className="info-box">
            <h3>Solicite seu Orçamento</h3>
            <p>
              Obtenha um orçamento de maneira rápida e simples, entre em contato
              conosco pelo WhatsApp e detalhe o serviço necessário.
            </p>
            <ContactButton bg="#00a859" color="#fff" />
          </div>
          <div className="info-box">
            <h3>Horário de Atendimentos</h3>
            <p>
              Segunda à Sex. 08:00h - 18:00h
              <br />
              Atendimento no domicílio
            </p>
          </div>
          <div className="info-box">
            <h3>ENTRE EM CONTATO</h3>
            <p>Telefone: (37) 99955-0038</p>
            <ContactButton bg="#00a859" color="#fff" />
          </div>
        </section>
      </div>
    </ScrollView>
  );
};

export default App;
