import React from "react";
import "./App.css"; // Custom styles for layout and responsiveness

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="VClean Logo" />
          <h1>V Clean Higienização</h1>
        </div>
        <nav className="nav">
          <a href="#about">Sobre Nós</a>
          <a href="#services">Serviços</a>
          <button className="contact-btn">Fale conosco</button>
        </nav>
      </header>

      <main className="hero">
        <h2>VCLEAN HIGIENIZAÇÃO</h2>
        <p>
          A Empresa Nº1 em Higienização e Impermeabilização de Estofados em
          Cláudio
        </p>
        <button className="contact-btn">Fale conosco</button>
        <p className="description">
          A VClean Higienização oferece serviços de limpeza de alta qualidade a
          clientes e empresas, utilizando produtos profissionais e somos
          comprometidos com a excelência em cada serviço prestado.
        </p>
      </main>

      <section className="info-cards">
        <div className="card">
          <h3>Solicite seu Orçamento</h3>
          <p>
            Obtenha um orçamento de maneira rápida e simples, entre em contato
            conosco pelo WhatsApp.
          </p>
        </div>
        <div className="card">
          <h3>Horário de Atendimentos</h3>
          <p>Segunda a Sábado, 08:00h - 18:00h</p>
          <p>Atendimento ao domicílio</p>
        </div>
        <div className="card">
          <h3>Entre em Contato</h3>
          <p>Telefone: (37) 99955-0038</p>
          <button className="contact-btn">Fale conosco</button>
        </div>
      </section>
    </div>
  );
}

export default App;
