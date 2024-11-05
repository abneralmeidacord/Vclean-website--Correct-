import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQDrawer = () => {
  return (
    <div style={styles.container}>
      <Typography variant="h5" style={styles.header}>
        Perguntas frequentes
      </Typography>
      <Accordion style={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={styles.summary}
        >
          <Typography style={styles.question}>
            1. Com que frequência devo fazer a higienização do meu estofado?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={styles.details}>
          <Typography style={styles.answer}>
            Recomenda-se a cada 6 meses, mas pode variar conforme o uso e a
            presença de crianças ou animais de estimação.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={styles.summary}
        >
          <Typography style={styles.question}>
            2. A higienização remove manchas antigas?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={styles.details}>
          <Typography style={styles.answer}>
            Em muitos casos, sim, mas a eficiência pode depender da idade e do
            tipo de mancha.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={styles.summary}
        >
          <Typography style={styles.question}>
            3. Quanto tempo o estofado leva para secar após a higienização?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={styles.details}>
          <Typography style={styles.answer}>
            O tempo de secagem varia, mas geralmente é de 4 a 6 horas em
            condições normais.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div style={styles.footer}>
        <Typography variant="body2" style={styles.footerText}>
          © VClean Higienizações
        </Typography>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "90%",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#e0f4fc",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    color: "#1d4878",
    fontWeight: "bold",
    fontSize: "1.5em",
    marginBottom: "20px",
  },
  accordion: {
    borderRadius: "5px",
    marginBottom: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  summary: {
    padding: "10px 20px",
  },
  question: {
    fontWeight: "bold",
    color: "#1d4878",
  },
  details: {
    backgroundColor: "#f7fbfd",
    padding: "15px 20px",
  },
  answer: {
    color: "#333333",
    fontSize: "0.9em",
  },
  footer: {
    marginTop: "20px",
    textAlign: "center",
  },
  footerText: {
    color: "#1d4878",
    fontSize: "0.8em",
  },
};

export default FAQDrawer;
